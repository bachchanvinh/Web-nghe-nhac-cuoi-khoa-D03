import React from 'react'
import './style.css'

const NextSong = (props) => {
    return (
        <div className="musicbar-currentsong-khoa">
            <h1>next song:</h1>
            <div className="musicbar-currentsong-khoa-wrap">
                <img className="img" src={props.songs[props.nextSongIndex].img_src} alt="ava-song"/>
                <div className="desc">
                    <p className="name">{props.songs[props.nextSongIndex].name}</p>
                    <p className="singer">{props.songs[props.nextSongIndex].singer}</p>
                </div>
            </div>
        </div>
    )
}

export default NextSong
