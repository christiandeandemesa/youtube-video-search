import broken_video from '../img/broken.jpg';
import styles from './VideoInfo.module.scss';

function VideoInfo(props) {

    // If a currVideo was not passed through props, render the below html.
    if(!props.currVideo) return (
        <div id={styles.error}>
            <img src={broken_video} alt='Broken Video Icon'/>
        </div>
    );
    
    // If a currVideo was passed through props...
    else {

        // The video source is an embedded youtube video that targets a specific video using its video id.
        const videoSrc = `https://www.youtube.com/embed/${props.currVideo.id.videoId}`;

        return (
            <div id={styles.container}>
                {/* iframe (inline frame) is used to embed something in an HTML document. */}
                <iframe
                    // This is the video that is embedded.
                    src={videoSrc} 
                    // Allows you to make the video full screen.
                    allowFullScreen
                />
            </div>
        )
    }
}

export default VideoInfo;