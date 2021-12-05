import React from 'react'
import './style.css'

const MainMenu = () => {
    return (
        <div className="main-menu-khoa">
            <div className="search">
                <i className="search-icon fas fa-search"></i>
                <input className="input" type="text" 
                placeholder="Nhập tên bài hát" />
            </div>
            <div className="sign">
                <div className="sign-item">Đăng ký</div>
                <div className="sign-item">Đăng nhập</div>
            </div>
        </div>
    )
}

export default MainMenu
