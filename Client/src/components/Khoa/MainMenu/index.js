import React, { useState } from 'react'
import './style.css'

const MainMenu = (props) => {
    const [keyword,setKeyword] = useState('')

    const onChangeSearch = (e) => {
        const target = e.target
        const value = target.value
        setKeyword(value)
        props.onSearch(keyword)
      }

    return (
        <div className="main-menu-khoa">
            <div className="search">
                <i className="search-icon fas fa-search"></i>
                <input className="input" type="text" 
                value={keyword}
                onChange = {onChangeSearch}
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
