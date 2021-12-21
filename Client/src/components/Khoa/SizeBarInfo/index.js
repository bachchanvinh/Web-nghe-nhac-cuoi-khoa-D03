import React from 'react'
import { Link } from "react-router-dom"
import './style.css'

const SizeBarInfo = (props) => {
    const { isDisplayPlaylist, onHandleOpenPlaylist } = props

    return (
        <div className="sizebar-khoa">
            <div className="sizebar-wrap">
                <Link to={'/home'}>
                    <h1 className="logo">Listen<p className="blue">To</p><p className="yellow">ge</p><p className="orange">ther</p></h1>
                </Link>

                <div className="sizebar-menu">
                    <div className="sizebar-item">
                        <i className="sizebar-item-icon fas fa-box"></i>
                        <span className="sizebar-item-text">cá nhân</span>
                    </div>
                    <div className="sizebar-item active">
                        <i className="sizebar-item-icon fab fa-discourse"></i>
                        <span className="sizebar-item-text">khám phá</span>
                    </div>
                    <div className="sizebar-item">
                        <i className="sizebar-item-icon fas fa-users"></i>
                        <span className="sizebar-item-text">#zingchart</span>
                    </div>
                    <div className="sizebar-item">
                        <i className="sizebar-item-icon fas fa-broadcast-tower"></i>
                        <span className="sizebar-item-text">radio<span className="sizebar-item-live">LIVE</span></span>
                    </div>
                    <div className="sizebar-item">
                        <i className="sizebar-item-icon fas fa-eye"></i>
                        <span className="sizebar-item-text">theo dõi</span>
                    </div>
                </div>
                <div className="sizebar-menu">
                    <div className="sizebar-item">
                        <i className="sizebar-item-icon fas fa-music"></i>
                        <span className="sizebar-item-text">nhạc mới</span>
                    </div>
                    <div className="sizebar-item">
                        <i className="sizebar-item-icon fab fa-codepen"></i>
                        <span className="sizebar-item-text">thể loại</span>
                    </div>
                    <div className="sizebar-item">
                        <i className="sizebar-item-icon fas fa-star"></i>
                        <span className="sizebar-item-text">top 100</span>
                    </div>
                    <div className="sizebar-item">
                        <i className="sizebar-item-icon fas fa-desktop"></i>
                        <span className="sizebar-item-text">MV</span>
                    </div>
                </div>
                <div className="sizebar-menu">
                    <div className={isDisplayPlaylist === true
                        ? "sizebar-item active"
                        : "sizebar-item"} onClick={() => onHandleOpenPlaylist()}>
                            <i className="details-like-icon-empty details-like-icon fas fa-heart"></i>
                            <span className="sizebar-item-text"
                            >Playlist đã thích</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SizeBarInfo
