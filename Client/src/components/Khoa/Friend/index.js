import React from 'react'
import ChatGeneral from '../ChatGeneral'
import './style.css'

const Friend = () => {
    return (
        <div className="friend-khoa">
            <div className="friend-wrap">
                <div className="friend-heading">
                    <div className="friend-heading-title">Người liên hệ</div>
                    <i className="friend-heading-icon fas fa-user-plus"></i>
                </div>
                <div className="friend-list">
                    <div className="friend-list-item">
                        <img alt="avatar" className="friend-list-img" src="/assets/vinh.jpg"></img>
                        <span className="friend-list-name">Chấn vinh</span>
                    </div>
                    <div className="friend-list-item">
                        <img alt="avatar" className="friend-list-img" src="/assets/vinh.jpg"></img>
                        <span className="friend-list-name">Đinh thương</span>
                    </div>
                    <div className="friend-list-item">
                        <img alt="avatar" className="friend-list-img" src="/assets/vinh.jpg"></img>
                        <span className="friend-list-name">Ánh như</span>
                    </div>
                    <div className="friend-list-item">
                        <img alt="avatar" className="friend-list-img" src="/assets/vinh.jpg"></img>
                        <span className="friend-list-name">Đạt thành</span>
                    </div>
                </div>
            </div>
            <div className="chat-general">
                <ChatGeneral />
            </div>
        </div>
    )
}

export default Friend
