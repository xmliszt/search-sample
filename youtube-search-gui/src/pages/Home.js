import React from 'react';
import '../css/Home.css';
import { isYouTubeLink } from '../utils/Utils';
import { Input, message, Tooltip } from 'antd';
import { YoutubeOutlined, KeyOutlined } from '@ant-design/icons';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.linkInput = React.createRef();
    this.state = {
      key: "",
      link: ""
    }
  }

  render() {
    return (
      <div className="input-container">
        <h1 className="title">Musiio AI Search: YouTube Link</h1>
        <Tooltip title="Press 'Enter' to submit">
          <Input prefix={<KeyOutlined />} type="text" size="large" allowClear placeholder="Enter your API key..." value={this.state.key} onChange={this.handleKeyChange} onPressEnter={this.handleKeyEnter} autoFocus />
        </Tooltip>
        <Tooltip title="Press 'Enter' to submit">
          <Input ref={this.linkInput} prefix={<YoutubeOutlined />} type="url" size="large" allowClear value={this.state.link} onChange={this.handleLinkChange} onPressEnter={this.handleEnter} placeholder="Enter valid YouTube video link..." />
        </Tooltip>
      </div>
    );
  }

  handleKeyEnter = () => {
    if (this.state.key === "") {
      message.error("Please input your API key!");
      return;
    }
    this.linkInput.current.focus();
  }

  handleEnter = () => {
    if (this.state.link === "") {
      message.error("Please input the YouTube link!");
      return;
    } else if (!isYouTubeLink(this.state.link)) {
      message.error("Please input a valid YouTube video link!");
      return;
    }
    this.props.history.push(`/results?key=${this.state.key}&url=${this.state.link}`);
  }

  handleKeyChange = e => {
    var key = e.target.value;
    this.setState({
      key: key
    });
  }

  handleLinkChange = e => {
    var inputLink = e.target.value;
    this.setState({
      link: inputLink
    });
  }
}

export default Home;