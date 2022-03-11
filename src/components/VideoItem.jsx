import styles from './VideoItem.module.scss';

function VideoItem(props) {
    return (
        /*
        If any part of this div is clicked on, it runs the handleVideoSelect passed through props on the video also passed through props which sets the currVideo in 
        App.js.
        Using a callback function is not necessary, but I did it for consistency.
        */
        <div onClick={() => props.handleVideoSelect(props.video)} id={styles.video}>
            {/* Displays the video's image within the list. */}
            <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description}/>
            {/* This is the video's title. */}
            <p id={styles.title}><span>Title:</span> {props.video.snippet.title}</p>
            {/* This is the video's description. */}
            <p id={styles.description}><span>Description:</span> {props.video.snippet.description}</p>
        </div>
    );
}

export default VideoItem;