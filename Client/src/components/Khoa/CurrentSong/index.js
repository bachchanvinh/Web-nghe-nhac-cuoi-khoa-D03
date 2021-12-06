import React from 'react'
import './style.css'

const CurrentSong = (props) => {
    return (
        <div className="musicbar-currentsong-khoa">
            <div className="musicbar-currentsong-khoa-wrap">
                <img className="img" src={props.songs[props.currentSongIndex].img_src} alt="ava-song"/>
                <div className="desc">
                    <p className="name">{props.songs[props.currentSongIndex].name}</p>
                    <p className="singer">{props.songs[props.currentSongIndex].singer}</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentSong
