import React from 'react'
import SizeBarInfo from '../../components/Khoa/SizeBarInfo'
import MainPage from '../../components/Khoa/MainPage'
import Friend from '../../components/Khoa/Friend'
import './style.css'
// import { addDataMusic } from '../../controller/firebase/firestore' //Chỉ dùng để push data lên firestore
// import { dataOri } from '../../constants/dataorigin'//Chỉ dùng để push data lên firestore
// dataOri.map((ele, ind) => { addDataMusic(ele, ind) })//Chỉ dùng để push data lên firestore
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
