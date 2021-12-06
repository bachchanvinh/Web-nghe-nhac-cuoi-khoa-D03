import React from 'react'
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPlay,
    faPause,
    faForward,
    faBackward
}  from "@fortawesome/free-solid-svg-icons";

const Control = (props) => {
    return (
        <div class="c-player--control">
            <button class="skip-btn"
                 onClick={() => props.SkipSong(false)}
            >
                <FontAwesomeIcon icon={faBackward}/>
            </button>
            <button class="play-btn"
                    onClick={() => props.setIsPlaying(!props.isPlaying)}
            >
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button class="skip-btn"
                onClick={() => props.SkipSong()}
            >
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}

export default Control
