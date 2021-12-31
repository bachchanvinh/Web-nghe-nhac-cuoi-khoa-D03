import React, { useEffect, useRef, useState } from 'react'
import Control from '../Control'
import './style.css'

const Player = (props) => {
    const {songs, currentSongIndex, setCurrentSongIndex,
        setRotate, onHandleClickMusic, isPlaying, setIsPlaying} = props
    const audioEl = useRef(null)
    const [actionLoop, setActionLoop] = useState(false)
    const [actionRandom, setActionRandom] = useState(false)

    useEffect(() => {
        if(audioEl.current) {
            if (isPlaying) {
                audioEl.current.play();
                setRotate(true)
            }
            else {
                audioEl.current.pause()
                setRotate(false)
            }
        }
     })

    const SkipSong = (action, fowards = true) => {
        if(action === "skip") {
            if (fowards) {
                setCurrentSongIndex(() => {
                    let temp = currentSongIndex
                    temp ++
    
                    if(temp > songs.length - 1) {
                        temp = 0
                    }
                    onHandleClickMusic(songs[temp].uid)
                    return temp
                })
            }
            else {
                setCurrentSongIndex(() => {
                    let temp = currentSongIndex
                    temp --
    
                    if(temp < 0) {
                        temp = songs.length - 1
                    }
                    onHandleClickMusic(songs[temp].uid)
                    return temp
                })
            }
        }

        else if(action === "loop") {
            audioEl.current.play();
        }

        else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex
                temp = Math.floor(Math.random() * songs.length)

                onHandleClickMusic(songs[temp].uid)
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
                actionLoop={actionLoop}
                setActionLoop={setActionLoop}
                actionRandom={actionRandom}
                setActionRandom={setActionRandom}
            />
            {songs[currentSongIndex] && <audio
                className="c-player--audio"
                controls
                ref={audioEl}
                src={songs[currentSongIndex].src}

                onEnded={() => {
                    if(actionLoop && actionRandom) {
                        SkipSong("loop")
                    }
                    else if (actionLoop) {
                        SkipSong("loop")
                    }
                    else if(actionRandom) {
                        SkipSong("random")
                    }
                    else {
                        SkipSong("skip")
                    }
                }}
            ></audio> }
        </div>
    )
}

export default Player
