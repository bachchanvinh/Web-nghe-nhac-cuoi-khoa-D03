import React from 'react'
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPlay,
    faPause,
    faRedoAlt,
    faForward,
    faBackward,
    faRandom
}  from "@fortawesome/free-solid-svg-icons";

const Control = (props) => {
    return (
        <div className="c-player--control">
            <button className={props.actionLoop===true ? "skip-btn action" 
                                                         : "skip-btn"}
                onClick={() => props.setActionLoop(!props.actionLoop)}
                style={{marginRight:'1rem'}}
            >
                <div>
                    <div>1</div>
                    <FontAwesomeIcon icon={faRedoAlt}/>
                </div>
            </button>
            <button className="skip-btn"
                 onClick={() => props.SkipSong("skip", false)}
            >
                <FontAwesomeIcon icon={faBackward}/>
            </button>
            <button className="play-btn"
                    onClick={() => props.setIsPlaying(!props.isPlaying)}
            >
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn"
                onClick={() => props.SkipSong("skip")}
            >
                <FontAwesomeIcon icon={faForward} />
            </button>
            <button className={props.actionRandom===true ? "skip-btn action" 
                                                         : "skip-btn"}
                onClick={() => props.setActionRandom(!props.actionRandom)}
                style={{marginLeft:'1rem'}}
            >
                <FontAwesomeIcon icon={faRandom}/>
            </button>
        </div>
    )
}

export default Control
