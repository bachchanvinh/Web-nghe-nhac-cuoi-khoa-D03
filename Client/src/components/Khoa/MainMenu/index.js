import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import './style.css'

const MainMenu = (props) => {
    const {isLogin, setIsLogin} = props
    const [keyword,setKeyword] = useState('')

    const onChangeSearch = (e) => {
        const target = e.target
        const value = target.value
        setKeyword(value)
        props.onSearch(keyword)
      }

    const sign = () => {
        if(!isLogin) {
            return  <>
            <Link to={"/signup"} className="sign-item">Đăng ký</Link>
            <Link to={"/signin"} className="sign-item">Đăng nhập</Link>
        </>
        }

        return <div className="user-info">
                    <h1 className="user-name">Welcome, Khoa</h1>
                </div>
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
                {/* {isLogin && <>
                    <Link to={"/signup"} className="sign-item">Đăng ký</Link>
                    <Link to={"/signin"} className="sign-item">Đăng nhập</Link>
                </>} */}
                {sign()}
            </div>
        </div>
    )
}

export default MainMenu
