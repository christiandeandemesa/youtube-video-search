function VideoInfo(props) {

    if(!props.video) return <div><h1>Loading...</h1></div>
    
    else {
        const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

        return (
            <div>
                <div>
                    <iframe 
                        title='Video Player'
                        src={videoSrc} 
                        allowFullScreen 
                    />
                </div>
                <div>
                    <p>{props.video.snippet.title}</p>
                    <p>{props.video.snippet.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoInfo;