import React, { useState } from 'react'
import SizeBarInfo from '../../components/Khoa/SizeBarInfo'
import MainPage from '../../components/Khoa/MainPage'
import Friend from '../../components/Khoa/Friend'
import Playlist from '../../components/Khoa/Playlist'
import {data} from '../../constants/playlist_fake'
import './style.css'
// import { addDataMusic } from '../../controller/firebase/firestore' //Chỉ dùng để push data lên firestore
// import { dataOri } from '../../constants/dataorigin'//Chỉ dùng để push data lên firestore
// dataOri.map((ele, ind) => { addDataMusic(ele, ind) })//Chỉ dùng để push data lên firestore
const Home = () => {
    const [isDisplayPlaylist, setIsDisplayPlaylist] = useState(false)
    const [dataPlaylist, setDataPlaylist] = useState(data)

    const onHandleOpenPlaylist = () => {
        setIsDisplayPlaylist(!isDisplayPlaylist)
    }

    return (
        <div className="home-khoa">
            <SizeBarInfo 
                isDisplayPlaylist={isDisplayPlaylist}
                onHandleOpenPlaylist={onHandleOpenPlaylist}/>
            {isDisplayPlaylist === false 
                            ? <MainPage isDisplayPlaylist={isDisplayPlaylist}
                                setDataPlaylist={setDataPlaylist}
                            /> 
                            : <Playlist isDisplayPlaylist={isDisplayPlaylist}
                                data={dataPlaylist}
                                setDataPlaylist={setDataPlaylist}
                                /> }
            <Friend />
        </div>
    )
}

export default Home
