import { uploadYoutubeService, performSearchService, extractSearchFeatureService } from "../api/ResultsAPI";
import React from 'react';
import { Tooltip } from 'antd';
import { transformKeys } from '../utils/Utils';

export async function uploadYoutube(key, link) {
  var results = await uploadYoutubeService(key, link);
  var json = await results.json();
  if (results.ok) {
    return {
      success: true,
      data: json
    }
  } else {
    return {
      success: false,
      data: json.error
    }
  }
}

export async function extractSearchFeature(key, track_id) {
  var results = await extractSearchFeatureService(key, track_id)
  var json = await results.json();
  if (results.ok) {
    return {
      success: true,
      data: json
    }
  } else {
    return {
      success: false,
      data: json.error
    }
  }
}

export async function performSearch(key, track_id, search) {
  var page = 1;
  var items_per_page = 1000;
  var results = await performSearchService(key, track_id, search, page, items_per_page);
  var json = await results.json();
  if (results.ok) {
    return {
      success: true,
      data: json
    };
  } else {
    return {
      success: false,
      data: json.error
    };
  }
}

/**
 * Given raw data from response, make data suitable for display in table
 * @param {Array} raw Raw data array
 */
export function makeData(raw) {
  var final = [];
  raw.forEach((d, idx) => {
    var tags = d.tags;
    var new_data = {};
    new_data["key"] = idx;
    new_data["title"] = d.title;
    new_data["artist"] = d.artist;
    new_data["album"] = d.album;
    new_data["id"] = d.id;
    new_data["primary_customer_track_id"] = d.primary_customer_track_id;
    tags.forEach(t => {
      if (t.type === 'KEY') {
        new_data[t.type] = transformKeys(t.name);
      } else {
        new_data[t.type] = t.name;
      }
    });
    final.push(new_data);
  });
  return final;
}

/**
 * Make table columns
 */
export function makeColumns() {
  var columns = [
    {
      title: "Song",
      dataIndex: "title",
      width: 300,
      fixed: "left",
      ellipsis: {
        showTitle: false
      },
      render: title => (
        <Tooltip placement="topRight" title={title}>
          {title}
        </Tooltip>
      )
    },
    {
      title: "Artist",
      dataIndex: "artist",
      width: 200,
      ellipsis: {
        showTitle: false
      },
      render: artist => (
        <Tooltip placement="topRight" title={artist}>
          {artist}
        </Tooltip>
      )
    },
    {
      title: "Album",
      dataIndex: "album",
      width: 200,
      ellipsis: {
        showTitle: false
      },
      render: album => (
        <Tooltip placement="topRight" title={album}>
          {album}
        </Tooltip>
      )
    },
    {
      title: "Energy",
      dataIndex: "ENERGY",
      width: 100
    },
    {
      title: "Mood Valence",
      dataIndex: "MOOD VALENCE",
      width: 150,
      ellipsis: true
    },
    {
      title: "BPM",
      dataIndex: "BPM",
      width: 100
    },
    {
      title: "Vocal Gender",
      dataIndex: "VOCAL GENDER",
      width: 150,
      ellipsis: true
    },
    {
      title: "Key",
      dataIndex: "KEY",
      width: 100
    },
    {
      title: "Quality",
      dataIndex: "QUALITY",
      width: 100
    },
    {
      title: "Genre",
      dataIndex: "GENRE V3",
      width: 300
    },
    {
      title: "Mood",
      dataIndex: "MOOD",
      width: 100
    },
    {
      title: "Track ID",
      dataIndex: "id",
      width: 200,
      ellipsis: {
        showTitle: false
      },
      render: id => (
        <Tooltip placement="topRight" title={id}>
          {id}
        </Tooltip>
      )
    },
    {
      title: "Primary Track ID",
      dataIndex: "primary_customer_track_id",
      width: 180,
      ellipsis: true
    }
  ];
  return columns;
}