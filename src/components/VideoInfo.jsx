function VideoInfo(props) {

    // If a currVideo was not passed through props, render the below html.
    if(!props.currVideo) return (
        <div>
            <h1>Please choose a video from the list.</h1>
        </div>
    );
    
    // If a currVideo was passed through props...
    else {

        // The video source is an embedded youtube video that targets a specific video using its video id.
        const videoSrc = `https://www.youtube.com/embed/${props.currVideo.id.videoId}`;

        return (
            <div>
                <div>
                    {/* iframe (inline frame) is used to embed something in an HTML document. */}
                    <iframe
                        // This is the video that is embedded.
                        src={videoSrc} 
                        // Allows you to make the video full screen.
                        allowFullScreen
                    />
                </div>
                <div>
                    {/* This is the embedded video's title. */}
                    <p>{props.currVideo.snippet.title}</p>
                    {/* This is the embeded video's description. */}
                    <p>{props.currVideo.snippet.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoInfo;