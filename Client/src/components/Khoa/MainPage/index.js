import React, { useState, useEffect } from 'react'
import MainList from '../MainList'
import MainMenu from '../MainMenu'
import CurrentSong from '../CurrentSong'
import Player from '../Player'
import NextSong from '../NextSong'
import Slider from '../Slider'
import { getMusics } from '../../../controller/firebase/firestore'
import { updateLikedMusic } from '../../../controller/firebase/firestore'
import './style.css'

const MainPage = (props) => {
  let [songs, updateSongs] = useState([]);
  const { userIn4, isLogin, onClickSignOut } = props
  const [songsall, setsongsall] = useState([])
  // const [isLogin, setIsLogin] = useState(false)
  const [keywordFilter, setKeywordFilter] = useState('')
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [isActiveId, setIsActiveId] = useState(1)
  const [rotate, setRotate] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false)
  const [sliderMusic, setSliderMusic] = useState([])

  useEffect(() => {
    let data2 = []
    getMusics(data2, () => { updateSongs(data2) }, () => { setsongsall(data2) })
    setSliderMusic(data2)
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
    if (key === "") {
      updateSongs(songsall)
    }
    else {
      let newSong = songsall.filter((song) => song.name.toLowerCase().indexOf(key) !== -1);
      if (newSong.length > 0) {
        updateSongs(newSong)
      }
    }
  }



  const onHandleAddSong = (song) => {
    props.setDataPlaylist(prev => {
      let checkSong = prev.find(item => item.name === song.name)
      let songListUID = []
      if (checkSong) {
        let songList = []
        songList = [...prev]
        songList.map((song) => songListUID.push(song.uid_name))
        updateLikedMusic(userIn4.uid, songListUID)
        return [...prev]
      }
      song = { ...song, uid: prev.length + 1 }
      // prev.map((ele) => console.log(ele.uid_name))
      let newSongs = [...prev, song]
      newSongs.map((song) => songListUID.push(song.uid_name))
      updateLikedMusic(userIn4.uid, songListUID)
      return newSongs
    })
  }

  return (
    <div className="main-khoa">
      <MainMenu
        onSearch={onSearch}
        isLogin={isLogin}
        onClickSignOut={onClickSignOut}
        userIn4={userIn4}
      />

      <Slider songs={sliderMusic} onHandleClickMusic={onHandleClickMusic} />

      <div className="container">
        <MainList
          currentSongIndex={currentSongIndex}
          songs={songs}
          onHandleClickMusic={onHandleClickMusic}
          isActiveId={isActiveId}
          onHandleAddSong={onHandleAddSong}
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
          onHandleClickMusic={onHandleClickMusic}
          setRotate={setRotate}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
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
