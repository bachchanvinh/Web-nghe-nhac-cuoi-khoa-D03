import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Friend from "../Friend";

const MainMenu = (props) => {
    const { isLogin, onClickSignOut, userIn4 } = props
    const [keyword, setKeyword] = useState('')
    const [openChat, setOpenChat] = useState(false)



    const onChangeSearch = (e) => {
        const target = e.target
        const value = target.value
        setKeyword(value)
        props.onSearch(keyword)
    }

    const handleOpenChat = () => {
        setOpenChat(true)
    }
    const handleOutMenuChat = () => {
        setOpenChat(false)
    }

    const sign = () => {
        if (!isLogin) {
            return <>
                <Link to={"/signup"} className="sign-item">Đăng ký</Link>
                <Link to={"/signin"} className="sign-item">Đăng nhập</Link>
            </>
        }
        if (userIn4 !== undefined) {
            return <div className="user-info">
                <div className="friend-loggin">
                    <img alt="avatar" className="friend-list-img" src={userIn4.ava_src}></img>
                    <span className="friend-list-name">{userIn4.userName}</span>
                </div>
                <button className='sign-item' onClick={onClickSignOut} >Đăng xuất</button>
                <div className="popup-chat" onClick={handleOpenChat}>
                    <i class="far fa-comment-dots">Chat</i>
                </div>
                {openChat && <Friend userIn4={userIn4} isLogin={isLogin} handleOutMenuChat= {handleOutMenuChat} />}
            </div>
        }
    }

    return (
        <div className="main-menu-khoa">
            <div className="search">
                <i className="search-icon fas fa-search"></i>
                <input className="input" type="text"
                    value={keyword}
                    onChange={onChangeSearch}
                    placeholder="Nhập tên bài hát" />
            </div>
            <div className="sign">
                {sign()}
            </div>
        </div>
    )
}

export default MainMenu
