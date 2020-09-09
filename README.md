# Musiio Search Code Sample

This repository contains code samples for using Musiio API **Search** service. **Search** allows end users to upload tracks to their catalog and performs feature extraction on the tracks. It can then be used to search through the catalog to find similar tracks that match the given features.

The code samples are put in `/samples`. Within each folder, you can find detailed code samples for various languages such as Python, PHP, Java, JavaScript and Node.js. A Postman collection is also provided in the documentation below for users who would like to try out in the GUI first.

Below is a breakdown of the code sample repository structure:

```
Musiio Search Code Sample (./samples/)
|
|--python/	(Python samples)
|--java/	(Java samples)
|--php/		(PHP samples)
|--js/		(JavaScript samples)
|--node/	(Node.js samples)
```

## Table of Contents
[YouTube Link Upload GUI Sample](#youtube-link-upload-gui-sample)

[Postman Collection](#postman-collection)

* [How to set up postman samples](#how-to-set-up-postman-samples)
* [Add Track](#add-track)
* [Update Track](#update-track)
* [Get Track](#get-track)
* [Delete Track](#delete-track)
* [Catalog Info](#catalog-info)
* [Upload File](#upload-file)
* [Upload YouTube Link](#upload-youtube-link)
* [Extract Search Features](#extract-search-features)
* [Perform Search](#perform-search)
* [Get Search Dictionary](#get-search-dictionary)

[PHP Sample](#php-sample)

* [Add Track](#add-track-1)
* [Update Track](#update-track-1)
* [Get Track](#get-track-1)
* [Delete Track](#delete-track-1)
* [Catalog Info](#catalog-info-1)
* [Upload File](#upload-file-1)
* [Upload YouTube Link](#upload-youtube-link-1)
* [Extract Search Features](#extract-search-features-1)
* [Perform Search](#perform-search-1)
* [Get Search Dictionary](#get-search-dictionary-1)

[JavaScript Sample](#javascript-sample)

* [Add Track](#add-track-2)
* [Update Track](#update-track-2)
* [Get Track](#get-track-2)
* [Delete Track](#delete-track-2)
* [Catalog Info](#catalog-info-2)
* [Upload File](#upload-file-2)
* [Upload YouTube Link](#upload-youtube-link-2)
* [Extract Search Features](#extract-search-features-2)
* [Perform Search](#perform-search-2)
* [Get Search Dictionary](#get-search-dictionary-2)

[Python Sample](#python-sample)

* [Set up running environment](#set-up-running-environment)
* [Add Track](#add-track-3)
* [Update Track](#update-track-3)
* [Get Track](#get-track-3)
* [Delete Track](#delete-track-3)
* [Catalog Info](#catalog-info-3)
* [Upload File](#upload-file-3)
* [Upload YouTube Link](#upload-youtube-link-3)
* [Extract Search Features](#extract-search-features-3)
* [Perform Search](#perform-search-3)
* [Get Search Dictionary](#get-search-dictionary-3)

[Java Sample](#java-sample)

* [Set up Maven project](#set-up-maven-project)
* [Add Track](#add-track-4)
* [Update Track](#update-track-4)
* [Get Track](#get-track-4)
* [Delete Track](#delete-track-4)
* [Catalog Info](#catalog-info-4)
* [Upload File](#upload-file-4)
* [Upload YouTube Link](#upload-youtube-link-4)
* [Extract Search Features](#extract-search-features-4)
* [Perform Search](#perform-search-4)
* [Get Search Dictionary](#get-search-dictionary-4)

[Node.js Sample](#nodejs-sample)

* [Set up running environment](#set-up-running-environment-1)
* [Add Track](#add-track-5)
* [Update Track](#update-track-5)
* [Get Track](#get-track-5)
* [Delete Track](#delete-track-5)
* [Catalog Info](#catalog-info-5)
* [Upload File](#upload-file-5)
* [Upload YouTube Link](#upload-youtube-link-5)
* [Extract Search Features](#extract-search-features-5)
* [Perform Search](#perform-search-5)
* [Get Search Dictionary](#get-search-dictionary-5)

## YouTube Link Upload GUI Sample

`./youtube-search-gui/`

This folder contains a GUI sample in React that allows user to upload a YouTube track link and perform feature extractions and search on the selected tracks in the user's catalogue. The detailed documentation could be found [here](./youtube-search-gui/README.md)

## Postman Collection

If you don't have postman, download here: https://www.postman.com/downloads/

Here is the collection public link:

https://www.getpostman.com/collections/9fc329fc3c4bf6b7af6c

### How to set up postman samples

1. Download postman and install it.
2. Open postman, at the top left corner click on "Import" button
3. Choose "Link" tab
4. Copy paste the collection public link in and click "Continue"
5. Press "Import" to import the collection
6. You will see the collection folder appears on the left-side panel. Click to expand to see individual request query.
7. Now you need to add your API key in to authorize your request. Click on the "three dots" icon on the right of the collection folder tab when your mouse hovers on it. Click "Edit". Under the "Authorization" tab, select "Basic Auth" and copy paste your **Search API key** into the "username" field. Leave the "password" field empty. Click "Update" to update your collection.
8. Now you are all set and it is time to use the sample.

### Add Track

1. Click on "Add Track" query under your collection. On the main panel, click on "Body" and select "form-data"
2. Under "track" click on "Select Files" under VALUE to select your audio file. 
3. Fill up remaining track information if needed to.
4. Press "**Send**" to send the request.
5. You will receive response at the bottom panel

### Update Track

1. Click on "Update Track" query under your collection. On the main panel, click on "Body" and select "form-data".
2. Input the values you want to update.
3. Press "**Send**" to send the request.
4. You will receive response at the bottom panel.

### Get Track

1. Click on "Get Track" query under your collection. On the main panel, click on "Params"
2. Input the the **id** of the track that you want to get.
3. Press "**Send**" to send the request.
4. You will receive response at the bottom panel

### Delete Track

1. Click on "Delete Track" query under your collection. On the main panel, click on "Params"
2. Input the **id** of the track that you want to delete.
3. Press "**Send**" to send the request.
4. You will receive response at the bottom panel

### Catalog Info

1. Click on "Catalog Info" query under your collection.
2. Press "**Send**" to send the request.
3. You will receive response at the bottom panel

### Upload File

1. Click on "Upload File" query under your collection. On the main panel, click on "Body" and select "form-data"
2. Input KEY as "audio" and press "Select Files" under VALUE to select an audio file to be uploaded
3. Press "**Send**" to send the request.
4. You will receive response at the bottom panel

### Upload YouTube Link

1. Click on "Upload YouTube Link" query under your collection. On the main panel, click on "Body" and select "raw", on the right select "JSON" in the dropdown menu.

2. Input the following into the textbox:

   ```json
   {
   	"link": "YOUR YOUTUBE LINK HERE"
   }
   ```

   

3. Press "**Send**" to send the request.

4. You will receive response at the bottom panel

### Extract Search Features

1. Click on "Extract Search Features" query under your collection. On the main panel, click on "Body" and select "raw", on the right select "JSON" in the dropdown menu.

2. Input the following into the textbox:

   ```json
   {
       "id": "TRACK ID HERE"
   }
   ```

3. Press "**Send**" to send the request.

4. You will receive response at the bottom panel

### Perform Search

1. Click on "Perform Search" query under your collection. On the main panel, click on "Body" and select "raw", on the right select "JSON" in the dropdown menu.

2. Input the following into the textbox:

   ```json
   {
   	"id": "Input track ID here",
   	"text": "Input search text here",
   	"page": 0,
   	"items": 50
   }
   ```

3. Press "**Send**" to send the request.

4. You will receive response at the bottom panel

### Get Search Dictionary

1. Click on "Get Search Dictionary" query under your collection.
2. Press "**Send**" to send the request.
3. You will receive response at the bottom panel

## PHP sample

### Add Track

`add-track.php`

You are required to input `$apiKey`,`$audioPath`. The rest of the fields are optional

To run:

```bash
php add-track.php
```

### Update Track

`update-track.php`

You are required to input `$apiKey`,`$track_id`. The rest of the fields are optional

To run:

```bash
php update-track.php
```

###  Get Track

`get-track.php`

You are required to input `$apiKey`,`$track_id`.

To run:

```bash
php get-track.php
```

### Delete Track

`delete-track.php`

You are required to input `$apiKey`,`$track_id`. 

To run:

```bash
php delete-track.php
```

### Catalog Info

`catalog-info.php`

You are required to input `$apiKey`. 

To run:

```bash
php catalog-info.php
```

### Upload File

`upload-file.php`

You are required to input `$apiKey`,`$audioFilePath`. 

To run:

```bash
php upload-file.php
```

### Upload YouTube Link

`upload-youtube-link.php`

You are required to input `$apiKey`,`$youtubeUrl`. 

To run:

```bash
php upload-youtube-link.php
```

### Extract Search Features

`extract-search-features.php`

You are required to input `$apiKey`,`$trackID`. 

To run:

```bash
php extract-search-features.php
```

### Perform Search

`perform-search.php`

You are required to input `$apiKey`,`$trackID`. You can specify the search text in `$searchText`, the page number in `page` and number of items per page in `items` 

To run:

```bash
php perform-search.php
```

### Get Search Dictionary

`get-search-dictionary.php`

You are required to input `$apiKey`. 

To run:

```bash
php get-search-dictionary.php
```



## JavaScript (Frontend) sample

JavaScript ( frontend ) search sample is to be integrated with frontend web application. Constants required are to be passed in. You can find the code sample in `samples/js/` folder. Response will be logged in web client console.

### Add Track

`add-track.js`

You are required to input `API_KEY`. 

Input audio file needs to be obtained from the `<input>` tag, as shown in the example below:

 ```html
<input type="file" id="fileInput">
...
<script>
    var fileInput = document.getElementById("fileInput");
</script>
 ```

The rest of the fields are optional

### Update Track

`update-track.js`

You are required to input `API_KEY`,`TRACK_ID`. The rest of the fields are optional

###  Get Track

`get-track.js`

You are required to input `API_KEY`,`TRACK_ID`.

### Delete Track

`delete-track.js`

You are required to input `API_KEY`,`TRACK_ID`. 

### Catalog Info

`catalog-info.js`

You are required to input `API_KEY`. 

### Upload File

`upload-file.js`

You are required to input `API_KEY` 

Input audio file needs to be obtained from the `<input>` tag, as shown in the example below:

 ```html
<input type="file" id="fileInput">
...
<script>
    var fileInput = document.getElementById("fileInput");
</script>
 ```

### Upload YouTube Link

`upload-youtube-link.js`

You are required to input `API_KEY`,`YOUTUBE_LINK`. 

### Extract Search Features

`extract-search-features.js`

You are required to input `API_KEY`,`TRACK_ID`. 

### Perform Search

`perform-search.js`

You are required to input `API_KEY`,`TRACK_ID`. You can specify the search text in `SEARCH_TEXT`, page number in `page` and number of items per page in `items` 

### Get Search Dictionary

`get-search-dictionary.js`

You are required to input `API_KEY`. 

## Python sample

Python sample is stored under `samples/python`

### Set up running environment

To install all the dependencies necessary for the scripts. Run the following code in your terminal:

For Mac

```bash
cd samples/search/python
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
```

For Windows

```bash
cd samples\search\python
virtualenv venv
venv\Scripts\activate
pip install -r requirements.txt
```

To deactivate virtual environment

```bash
deactivate
```

### Add Track

`add-track.py`

You are required to input `api_key`,`audio_file`. The rest of the fields are optional

To run:

```bash
python add-track.py
```

### Update Track

`update-track.py`

You are required to input `api_key`,`track_id`. The rest of the fields are optional

To run:

```bash
python update-track.py
```

###  Get Track

`get-track.py`

You are required to input `api_key`,`track_id`.

To run:

```bash
python get-track.py
```

### Delete Track

`delete-track.py`

You are required to input `api_key`,`track_id`. 

To run:

```bash
python delete-track.py
```

### Catalog Info

`catalog-info.py`

You are required to input `api_key`. 

To run:

```bash
python catalog-info.py
```

### Upload File

`upload-file.py`

You are required to input `api_key`,`audio_file`. 

To run:

```bash
python upload-file.py
```

### Upload YouTube Link

`upload-youtube-link.py`

You are required to input `api_key`,`youtube_link`. 

To run:

```bash
python upload-youtube-link.py
```

### Extract Search Features

`extract-search-features.py`

You are required to input `api_key`,`track_id`. 

To run:

```bash
python extract-search-features.py
```

### Perform Search

`perform-search.py`

You are required to input `API_KEY`,`TRACK_ID`. You can specify the search text in `SEARCH_TEXT`, page number in `page` and number of items per page in `items` 

To run:

```bash
python perform-search.py
```

### Get Search Dictionary

`get-search-dictionary.py`

You are required to input `api_key`. 

To run:

```bash
python get-search-dictionary.py
```

## Java sample

`samples/java`

### Set up Maven project

The Java sample shown here uses `Maven` as the Java project management tool. Hence, a `pom.xml` file is required for installing dependencies necessary to run the code samples. A detailed instruction on how to create a Maven project can be found here: https://spring.io/guides/gs/maven/

Initialize your Maven project, in this example, we will use the following project configuration:

```
<groupId>com.example.search</groupId>
<artifactId>search</artifactId>
```

Your project structure will look something like this:

```
(/samples/search/java/)
- search/
  | - src/
  |   | - main/com/example/search/
  |   | - test/
  | - target/
  | - pom.xml
```

Open `pom.xml` and add the following dependencies in the `<dependencies></dependencies>` tag

```xml
<!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-web -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
  <version>2.3.3.RELEASE</version>
</dependency>
```

Copy and paste the code samples Java files in `samples/search/java/` into your project folder `search/src/main/com/example/search/` such that your project structure looks something like this:

```
(/samples/search/java/)
- search/
  | - src/
  |   | - main/com/example/search/
  |   |   | - AddTrack.java
  |   |   | - UpdateTrack.java
  |   |   | - GetTrack.java
  |   |   | - DeleteTrack.java
  |   |   | - CatalogInfo.java
  |   |   | - AudioUpload.java
  |   |   | - YouTubeUpload.java
  |   |   | - ExtractSearchFeatures.java
  |   |   | - PerformSearch.java
  |   |   | - GetSearchDictionary.java
  |   |   | - HeadersUtils.java	(utility file)
  |   | - test/
  | - target/
  | - pom.xml
```

Once you are done, go back to the root directory of your project, in this case:

```bash
cd samples/search/java/search
```

and then follow the commands below to run each file.

### Add Track

`AddTrack.java`

* Replcae package name with your own project group ID, (in our case here: `com.example.search`)

  ```java
  package com.example.search;
  ...
  ```

Required:  `API_KEY`

To run: 

```bash
mvn exec:java -Dexec.mainClass="com.example.search.AddTrack" -Dexec.args="audio file path here"
```

[Note: replace `com.example.search` with your own project group ID]

### Update Track

`UpdateTrack.java`

* Replcae package name with your own project group ID, (in our case here: `com.example.search`)

  ```java
  package com.example.search;
  ...
  ```

Required:  `API_KEY`

To run: 

```bash
mvn exec:java -Dexec.mainClass="com.example.search.UpdateTrack" -Dexec.args="track ID here"
```

[Note: replace `com.example.search` with your own project group ID]

### Get Track

`GetTrack.java`

* Replcae package name with your own project group ID, (in our case here: `com.example.search`)

  ```java
  package com.example.search;
  ...
  ```

Required: `API_KEY`

To run: 

```bash
mvn exec:java -Dexec.mainClass="com.example.search.GetTrack" -Dexec.args="track ID here"
```

[Note: replace `com.example.search` with your own project group ID]

### Delete Track

`DeleteTrack.java`

* Replcae package name with your own project group ID, (in our case here: `com.example.search`)

  ```java
  package com.example.search;
  ...
  ```

Required:  `API_KEY`

To run: 

```bash
mvn exec:java -Dexec.mainClass="com.example.search.DeleteTrack" -Dexec.args="track ID here"
```

[Note: replace `com.example.search` with your own project group ID]

### Catalog Info

`CatalogInfo.java`

* Replcae package name with your own project group ID, (in our case here: `com.example.search`)

  ```java
  package com.example.search;
  ...
  ```

Required: `API_KEY`

To run: 

```bash
mvn exec:java -Dexec.mainClass="com.example.search.CatalogInfo"
```

[Note: replace `com.example.search` with your own project group ID]

### Upload Audio File

`AudioUpload.java`

* Replcae package name with your own project group ID, (in our case here: `com.example.search`)

  ```java
  package com.example.search;
  ...
  ```

Required: `API_KEY`

To run: 

```bash
mvn exec:java -Dexec.mainClass="com.example.search.AudioUpload" -Dexec.args="audio file path here"
```

[Note: replace `com.example.search` with your own project group ID]

### Upload YouTube Link

`YoutubeUpload.java`

* Replcae package name with your own project group ID, (in our case here: `com.example.search`)

  ```java
  package com.example.search;
  ...
  ```

Required: `API_KEY`

To run: 

```bash
mvn exec:java -Dexec.mainClass="com.example.search.YoutubeUpload" -Dexec.args="youtube link here"
```

[Note: replace `com.example.search` with your own project group ID]

### Extract Search Features

`ExtractSearchFeatures.java`

* Replcae package name with your own project group ID, (in our case here: `com.example.search`)

  ```java
  package com.example.search;
  ...
  ```

Required: `API_KEY`

To run: 

```bash
mvn exec:java -Dexec.mainClass="com.example.search.ExtractSearchFeatures" -Dexec.args="track ID here"
```

[Note: replace `com.example.search` with your own project group ID]

### Perform Search

`PerformSearch.java`

* Replcae package name with your own project group ID, (in our case here: `com.example.search`)

  ```java
  package com.example.search;
  ...
  ```

Required: `API_KEY`

Optional: `searchText`, `page`, `items`

​		Specify the optional arguments in the command line followed by the track ID, only integer values are allowed for `page` and `items`. If unspecified, `searchText` is deafult empty, `page` default to be 0, `items` default to be 50.

To run: 

```bash
mvn exec:java -Dexec.mainClass="com.example.search.PerformSearch" -Dexec.args="{track ID here} {searchText} {page} {items}"
```

Example:

```bash
mvn exec:java -Dexec.mainClass="com.example.search.PerformSearch" -Dexec.args="TMP_-biOGdYiF-I 'this is my search text' 1 20"
```

Meaning: use search text: 'this is my search text', query page number 1 and 20 items per page.

[Note: replace `com.example.search` with your own project group ID]

### Get Search Dictionary

`GetSearchDictionary.java`

* Replcae package name with your own project group ID, (in our case here: `com.example.search`)

  ```java
  package com.example.search;
  ...
  ```

Required: `API_KEY`

To run: 

```bash
mvn exec:java -Dexec.mainClass="com.example.search.GetSearchDictionary"
```

[Note: replace `com.example.search` with your own project group ID]

## Node.js sample

Node sample is stored under `samples/node`

### Set up running environment

To install all the dependencies necessary for the scripts. Run the following code in your terminal:

```bash
cd samples/search/node
npm install
```

### Add Track

`add-track.js`

You are required to input `API_KEY`,`AUDIO_PATH`. The rest of the fields are optional

To run:

```bash
node add-track.js
```

### Update Track

`update-track.js`

You are required to input `API_KEY`,`TRACK_ID`. The rest of the fields are optional

To run:

```bash
node update-track.js
```

###  Get Track

`get-track.js`

You are required to input `API_KEY`,`TRACK_ID`.

To run:

```bash
node get-track.js
```

### Delete Track

`delete-track.js`

You are required to input `API_KEY`,`TRACK_ID`. 

To run:

```bash
node delete-track.js
```

### Catalog Info

`catalog-info.js`

You are required to input `API_KEY`. 

To run:

```bash
node catalog-info.js
```

### Upload File

`upload-file.js`

You are required to input `API_KEY`,`AUDIO_PATH`. 

To run:

```bash
node upload-file.js
```

**For large file**

`Axios` have a default request body size of **2000 bytes**. To change that, simply modify `maxBodyLength` in the configuration as one of the `Axios` request function arguments like this:

```js
var config = {
  method: 'post',
  url: 'https://api-us.musiio.com/v1/search/upload/file',
  auth: {
    username: API_KEY,
    password: ""
  },
  headers: { 
    ...data.getHeaders()
  },
  data : data,
  maxBodyLength: 10000 // specify the request body length here!
};
```

### Upload YouTube Link

`upload-youtube-link.js`

You are required to input `API_KEY`,`YOUTUBE_LINK`. 

To run:

```bash
node upload-youtube-link.js
```

### Extract Search Features

`extract-search-features.js`

You are required to input `API_KEY`,`TRACK_ID`. 

To run:

```bash
node extract-search-features.js
```

### Perform Search

`perform-search.js`

You are required to input `API_KEY`,`TRACK_ID`You can specify search text in `SEARCH_TEXT`, the page number in `PAGE` and number of items per page in `ITEMS_PER_PAGE` 

To run:

```bash
node perform-search.js
```

### Get Search Dictionary

`get-search-dictionary.js`

You are required to input `API_KEY`. 

To run:

```bash
node get-search-dictionary.js
```