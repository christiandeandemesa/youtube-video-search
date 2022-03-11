// Imports the VideoItem component which is a reusable component that displays one of the videos returned from the search query.
import VideoItem from './VideoItem';

function VideoList(props) {

    // The renderedVideos variable maps over the videos array, and for each element (video) in videos...
    const renderedVideos = props.videos.map(video => {

        // Returns a VideoItem component.
        return (
            <div id>
                <VideoItem 
                    // All components in a collection need a unique key.
                    key={video.id.videoId} 
                    // Passes each element as props.
                    video={video}
                    // Passses the handleVideoSelect again as props.
                    handleVideoSelect={props.handleVideoSelect}
                />
            </div>
        )
    })

    return (
        // What it renders is exactly 5 VideoItem components.
        <div>{renderedVideos}</div>
    )
}

export default VideoList;