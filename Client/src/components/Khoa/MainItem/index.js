import React from 'react'
import './style.css'

const MainItem = (props) => {
    const {song, isActiveId} = props

    const handleClickMusic = (uid) => {
        props.onHandleClickMusic(uid)
    }

    return (
        <div className={isActiveId === song.uid ? "main-item-khoa active" : "main-item-khoa"}>
            <div className="details-info">
                <img src={song.img_src} alt="" />
                <button onClick={() => {handleClickMusic(song.uid)}} 
                        className="details-name">
                    {song.name}
                </button>
            </div>
            <p className="details-singer">{song.singer}</p>
            <p className="details-time">{song.time}</p>
            <div className="details-like">
                <i className="details-like-icon-empty details-like-icon far fa-heart"></i>
                <i className="details-like-icon-fill details-like-icon fas fa-heart"></i>
            </div>
        </div>
    )
}

export default MainItem
