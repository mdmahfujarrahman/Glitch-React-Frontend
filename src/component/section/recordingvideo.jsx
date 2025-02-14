import { Component } from "react";
import { Link } from "react-router-dom";
import recording_state from "../../constants/recording_state";
import Danger from "../alerts/Danger";
import Info from "../alerts/Info";
import VideoJSPlayer from "./videojsplayer";
import videojs from "video.js";


class RecordingVideo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        let video = '';

        if (this.props.video.video_processing_state = recording_state.FINISHED) {
            const videoJsOptions = {
                autoplay: true,
                controls: true,
                responsive: true,
                fluid: true,
                sources: [{
                  src: this.props.video.video_mp4,
                  type: 'video/mp4'
                }]
              };
            
              const handlePlayerReady = (player) => {
                //playerRef.current = player;
            
                // You can handle player events here, for example:
                player.on('waiting', () => {
                  videojs.log('player is waiting');
                });
            
                player.on('dispose', () => {
                  videojs.log('player will dispose');
                });
              };

            video = (<VideoJSPlayer options={videoJsOptions} onReady={handlePlayerReady} />);
        } else if (this.props.video.video_processing_state = recording_state.UNPROCESSED) {
            video = (<Info>Recording requires processing, please check back later.</Info>);
        } else if (this.props.video.video_processing_state = recording_state.PROCESSING) {
            video = (<Info>Recording is currently processing, please check back soon!</Info>);
        } else if (this.props.video.video_processing_state = recording_state.PROBLEM) {
            video = (<Danger>Recording is currently processing, please check back soon!</Danger>);
        }

        return (

            <section className="about-section">
                <div className="container">
                    <h3>Watch Recording</h3>
                    {video}
                </div>
            </section>

        );
    }
}

export default RecordingVideo;