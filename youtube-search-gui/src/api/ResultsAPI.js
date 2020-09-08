export async function uploadYoutubeService(key, link) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Basic " + btoa(key + ":"));

  var raw = JSON.stringify({ "link": link });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    var response = await fetch("https://api-us.musiio.com/v1/search/upload/youtube-link", requestOptions);
    return response;
  } catch (err) {
    return err;
  }
}

export async function extractSearchFeatureService(key, track_id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Basic " + btoa(key + ":"));

  var raw = JSON.stringify({ "id": track_id });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    var response = await fetch("https://api-us.musiio.com/v1/search/extract/search-features", requestOptions);
    return response;
  } catch (err) {
    return err;
  }
}

export async function performSearchService(key, track_id, search, page, items_per_page) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Basic " + btoa(key + ":"));

  var raw = JSON.stringify({
    "id": track_id,
    "text": search,
    "page": page,
    "items": items_per_page
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    var response = await fetch("https://api-us.musiio.com/v1/search/perform", requestOptions);
    return response;
  } catch (err) {
    return err;
  }
}