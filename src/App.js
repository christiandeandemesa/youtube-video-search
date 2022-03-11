// Imports useState from react to handle data.
import { useState } from 'react';
// Imports the API call from the Youtube component.
import Youtube from './apis/Youtube';
// Imports the SearchBar component which is a search bar that the user can type terms into to look for videos.
import SearchBar from './components/SearchBar';
// Imports the Video Info component which shows a playable video selected from the video list.
import VideoInfo from './components/VideoInfo';
// Imports the VideoList component which shows five videos based on the term(s) searched in the search bar.
import VideoList from './components/VideoList';
// Imports the Youtube icon image.
import youtube_icon from './img/youtube.png';
// Imports this component's stylesheet.
import './App.scss';

function App() {

  // The videos state will hold the videos for VideoList.
  const [videos, setVideos] = useState([]);
  // The currVideo state will hold the video that was selected from VideoList, and displayed in VideoInfo.
  const [currVideo, setCurrVideo] = useState(null);

  // handleFormSubmit is an asynchronous function for our promise, and it takes termFromSearchBar as an argument.
  async function handleFormSubmit(termFromSearchBar) {

    /*
    res (response) uses Youtube.get() to get a promise from the API in the Youtube component, and what is returned is a response object.
    The await keyword blocks the rest of the code from running until the following function (Youtube.get()) returns a promise.
    Appends '/search' to the baseURL in the Youtube component.
    */
    const res = await Youtube.get('/search', {
      // Adds another params, q, which is the search query for this API.
      params: {
        // The value we will search for is the argument passed into the handleFormSubmit function.
        q: termFromSearchBar
      }
    })
    // The videos state will hold the array associated with items.
    setVideos(res.data.items);
    /*
    Below is an example of what res could be:

    data: {
      "items": [
        {
          "kind": "youtube#searchResult",
          "etag": "vUV8zt4hOzZqwVf3OQzd5nFxIgQ",
          "id": {
            "kind": "youtube#video",
            "videoId": "YQHsXMglC9A"
          },
          "snippet": {
            "publishedAt": "2015-10-23T06:54:18Z",
            "channelId": "UComP_epzeKzvBX156r6pm1Q",
            "title": "Adele - Hello",
            "description": "Listen to \"Easy On Me\" here: http://Adele.lnk.to/EOM Pre-order Adele's new album \"30\" before its release on November 19: ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "AdeleVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2015-10-23T06:54:18Z"
          }
        }
      ]
    }
    */
  }

  // This function sets the currVideo state to be what is passed in arguments (video).
  function handleVideoSelect(video) {
    setCurrVideo(video);
  }

  return (
    <div className="App">

      <div id='left'>

        <div id='searchbar'>
          {/* This is the Youtube icon image. */}
          <img src={youtube_icon} alt='Youtube Icon'/>
          {/* Renders the SearchBar component and passes the handleFormSubmit function as props. */}
          <SearchBar handleFormSubmit={handleFormSubmit}/>
        </div>
        
        <div id='currVideo'>
          {/* Renders the VideoInfo component and passes the currVideo state's value as props. */}
          <VideoInfo currVideo={currVideo}/>
        </div>
      </div>

      <div id='right'>
        <div id='videos'>
          {/* Renders the VideoList component and passes the videos state's value, and handleVideoSelect function as props. */}
          <VideoList
            videos={videos}
            handleVideoSelect={handleVideoSelect}
          />
        </div>
      </div>
    </div>
  );
}

// Exports this components to be imported elsewhere.
export default App;