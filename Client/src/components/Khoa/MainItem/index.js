import React from 'react'
import './style.css'

const MainItem = (props) => {
    return (
        <div className="main-item-khoa">
            <div className="details-info">
                <img src={props.song.img_src} alt="" />
                <span className="details-name">{props.song.name}</span>
            </div>
            <p className="details-singer">{props.song.singer}</p>
            <p className="details-time">{props.song.time}</p>
            <div className="details-like">
                <i className="details-like-icon-empty details-like-icon far fa-heart"></i>
                <i className="details-like-icon-fill details-like-icon fas fa-heart"></i>
            </div>
        </div>
    )
}

export default MainItem
