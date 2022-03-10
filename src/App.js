import {useState} from 'react';
import Searchbar from './components/Searchbar';
import Youtube from './apis/Youtube';
import VideoList from './components/VideoList';
import VideoInfo from './components/VideoInfo';
import './App.scss';

function App() {

  const [videos, setVideos] = useState([]);
  const [currVideo, setCurrVideo] = useState(null);

  async function handleFormSubmit(termFromSearchBar) {
    const res = await Youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })
    setVideos(res.data.items);
  }

  function handleVideoSelect(video) {
    setCurrVideo(video);
  }

  return (
    <div className="App">
      <Searchbar handleFormSubmit={handleFormSubmit}/>
      <div>
        <div>
          <div>
            <VideoInfo video={currVideo}/>
          </div>
          <div>
            <VideoList 
              videos={videos}
              handleVideoSelect={handleVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;