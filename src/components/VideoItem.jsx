function VideoItem(props) {
    return (
        /*
        If any part of this div is clicked on, it runs the handleVideoSelect passed through props on the video also passed through props which sets the currVideo in 
        App.js.
        Using a callback function is not necessary, but I did it for consistency.
        */
        <div onClick={() => props.handleVideoSelect(props.video)}>
            {/* Displays the video's image within the list. */}
            <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description}/>
            <div>
                {/* This is the video's title while within the list. */}
                <div>{props.video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;