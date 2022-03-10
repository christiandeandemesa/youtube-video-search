import VideoItem from './VideoItem';

function VideoList(props) {
    const renderedVideos = props.videos.map(video => {
        return <VideoItem 
                    key={video.id.videoId} 
                    video={video}
                    handleVideoSelect={props.handleVideoSelect}
                />
    })

    return (
        <div>{renderedVideos}</div>
    )
}

export default VideoList;