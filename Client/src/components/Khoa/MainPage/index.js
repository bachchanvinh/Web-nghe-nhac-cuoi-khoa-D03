import React, { useState, useEffect } from 'react'
import MainList from '../MainList'
import MainMenu from '../MainMenu'
import CurrentSong from '../CurrentSong'
import Player from '../Player'
import NextSong from '../NextSong'
import Slider from '../Slider'
import { getMusics } from '../../../controller/firebase/firestore'
import './style.css'

const MainPage = (props) => {
  let [songs, updateSongs] = useState([]);
  const { userIn4, isLogin, onClickSignOut } = props
  // const [userIn4, setUserIn4] = useState({})
  // const [isLogin, setIsLogin] = useState(false)
  const [keywordFilter, setKeywordFilter] = useState('')
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [isActiveId, setIsActiveId] = useState(1)
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    let data2 = []
    getMusics(data2, () => { updateSongs(data2) })
    // getSignedIn().then((res) => {
    //   if (typeof res === "string") {
    //     setIsLogin(true)
    //     getUserin4(res, setUserIn4)
    //   }
    //   else setIsLogin(false)
    // })


  }, [])

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  const onHandleClickMusic = (uid) => {
    setIsActiveId(uid)
    setCurrentSongIndex(uid - 1)
  }

  const onSearch = (key) => {
    setKeywordFilter(key.toLowerCase())
  }

  if (keywordFilter) {
    let newSong = songs.filter((song) => song.name.toLowerCase().indexOf(keywordFilter) !== -1);
    if (newSong.length > 0) {
      songs = newSong
    }
  }



  return (
    <div className="main-khoa">
      <MainMenu
        onSearch={onSearch}
        isLogin={isLogin}
        onClickSignOut={onClickSignOut}
        userIn4={userIn4}
      />

      <Slider songs={songs} onHandleClickMusic={onHandleClickMusic} />

      <div className="container">
        <MainList
          currentSongIndex={currentSongIndex}
          songs={songs}
          onHandleClickMusic={onHandleClickMusic}
          isActiveId={isActiveId}
        />
      </div>

      <div className="musicbar">
        <CurrentSong
          currentSongIndex={currentSongIndex}
          songs={songs}
          rotate={rotate}
        />
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
          setRotate={setRotate}
        />
        <NextSong
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      </div>
    </div>
  )
}

export default MainPage
