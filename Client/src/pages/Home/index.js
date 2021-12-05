import React from 'react'
import SizeBarInfo from '../../components/Khoa/SizeBarInfo'
import MainPage from '../../components/Khoa/MainPage'
import Friend from '../../components/Khoa/Friend'
import './style.css'

const Home = () => {
    return (
        <div className="home-khoa">
            <SizeBarInfo />
            <MainPage />
            <Friend />
        </div>
    )
}

export default Home
