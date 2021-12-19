import React, { useState, useEffect } from 'react'
import SizeBarInfo from '../../components/Khoa/SizeBarInfo'
import MainPage from '../../components/Khoa/MainPage'
import Friend from '../../components/Khoa/Friend'
import { getUserin4 } from '../../controller/firebase/firestore'
import { getSignedIn, signOutfunc } from '../../controller/firebase/authen'
import './style.css'
// import { addDataMusic } from '../../controller/firebase/firestore' //Chỉ dùng để push data lên firestore
// import { dataOri } from '../../constants/dataorigin'//Chỉ dùng để push data lên firestore
// dataOri.map((ele, ind) => { addDataMusic(ele, ind) })//Chỉ dùng để push data lên firestore
const Home = () => {
    const [userIn4, setUserIn4] = useState({})
    const [isLogin, setIsLogin] = useState(false)
    const [check, setCheck] = useState({})
    useEffect(() => {
        console.log(check)

        getSignedIn(setCheck).then((res) => {
            if (typeof res === "string") {
                setIsLogin(true)
                getUserin4(res, setUserIn4)
                return res
            }
            else setIsLogin(false)
        })
    }, [check])
    const onClickSignOut = () => {
        signOutfunc()
        setIsLogin(false)
    }
    return (
        <div className="home-khoa">
            <SizeBarInfo />
            <MainPage userIn4={userIn4} isLogin={isLogin} onClickSignOut={onClickSignOut} />
            <Friend userIn4={userIn4} isLogin={isLogin} />
        </div>
    )
}

export default Home
