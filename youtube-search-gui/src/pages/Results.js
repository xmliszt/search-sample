import React from 'react';
import { Spin, message, Card, Input, Tooltip, Table } from 'antd';
import '../css/Results.css';
import { uploadYoutube, performSearch, extractSearchFeature, makeData, makeColumns } from '../controllers/ResultsController';
import { SearchOutlined } from '@ant-design/icons';

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      key: this.getQuery().get("key"),
      link: this.getQuery().get("url"),
      videoTitle: "",
      videoArtist: "",
      videoID: "",
      searchText: "",
      searchResults: [],
      tableColumns: [],
      showSearchResults: false,
      loading: false,
      loadingText: "Uploading Youtube Link...",
      resultsLoading: false,
      cardSize: "60vw"
    }
  }

  componentDidMount = async () => {
    this.toggleLoading(true);
    var results = await uploadYoutube(this.state.key, this.state.link);
    if (results.success) {
      var data = results.data;
      this.setState({
        videoTitle: data.title,
        videoArtist: data.artist,
        videoID: data.id,
        loadingText: "Extracting search features..."
      });
    } else {
      message.error(results.data);
      this.props.history.push("/");
    }

    var extract_results = await extractSearchFeature(this.state.key, this.state.videoID);
    this.toggleLoading(false);

    if (extract_results.success) {
      message.success("Your track has been successfully uploaded! You can start searching!");
      this.handleSearchEnter();
    } else {
      message.error(extract_results.data);
      this.props.history.push("/");
    }
  }

  getQuery = () => {
    return new URLSearchParams(this.props.location.search);
  }

  toggleShowResultsTable = value => {
    this.setState({
      showSearchResults: value
    });
  }

  toggleResultsLoading = value => {
    this.setState({
      resultsLoading: value
    });
  }

  toggleLoading = value => {
    this.setState({
      loading: value
    });
  }

  toggleLoadingText = value => {
    this.setState({
      loadingText: value
    });
  }

  changeCardSize = value => {
    this.setState({
      cardSize: value
    });
  }

  handleSearchChange = e => {
    this.setState({
      searchText: e.target.value
    });
  }

  handleSearchEnter = async () => {
    this.toggleShowResultsTable(true);
    this.changeCardSize("80vw");
    var search = this.state.searchText;
    this.toggleResultsLoading(true);
    var results = await performSearch(this.state.key, this.state.videoID, search);
    this.toggleResultsLoading(false);
    if (results.success) {
      var data = results.data;
      this.setState({
        totalItems: data.total_tracks,
        searchResults: makeData(data.search_results),
        tableColumns: makeColumns()
      });
    } else {
      message.error(results.data);
      this.toggleShowResultsTable(false);
    }
    console.log(results);
  }

  handleGoHome = () => {
    this.props.history.push("/");
  }

  render() {
    const SearchResultsTable = (
      <div>     
        <Table size="small" scroll={{x: 1000, y: 300}} dataSource={this.state.searchResults} columns={this.state.tableColumns} pagination />
      </div>
    );

    const GoHome = (
      <div className="small-cross" onClick={this.handleGoHome}>x</div>
    );
    return (
      <div className="Results">
        <Spin size="large" spinning={this.state.loading} tip={this.state.loadingText}>
          <div className="CardHolder">
            <Card hoverable title={this.state.videoTitle + "\tby: " + this.state.videoArtist} style={{ width: this.state.cardSize }} headStyle={{ fontVariant: "all-petite-caps" }} extra={GoHome}>
              Refine Search
              <Tooltip title="Press 'Enter' to perform search">
                <Input prefix={<SearchOutlined />} placeholder="Search..." onChange={this.handleSearchChange} onPressEnter={this.handleSearchEnter} allowClear />
              </Tooltip>
              <Spin spinning={this.state.resultsLoading} tip="Fetching results...">
              {this.state.showSearchResults ? SearchResultsTable: null}
              </Spin>
            </Card>
          </div>
        </Spin>
      </div>
    );
  }

}

export default Results;