import React, { useEffect, useRef, useState } from 'react'
import Control from '../Control'
import './style.css'

const Player = (props) => {
    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        }
        else audioEl.current.pause();
     })

    const SkipSong = (fowards = true) => {
        if(fowards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex
                temp ++

                if(temp > props.songs.length - 1) {
                    temp = 0
                }
                return temp
            })
        }

        else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex
                temp --

                if(temp < 0) {
                    temp = props.songs.length - 1
                }
                return temp
            })
        }

    }

    return (
        <div className="player-khoa">
            <Control 
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong}
            />
            <audio
                className="c-player--audio"
                controls
                ref={audioEl}
                src={props.songs[props.currentSongIndex].src}
            ></audio>
        </div>
    )
}

export default Player
