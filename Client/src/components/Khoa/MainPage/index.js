import React, { useState, useEffect, useRef } from 'react'
import MainList from '../MainList'
import MainMenu from '../MainMenu'
import './style.css'
import { data } from '../../../constants/data_fake'
import CurrentSong from '../CurrentSong'
import Player from '../Player'
import NextSong from '../NextSong'
import { getMusics } from '../../../controller/firebase/firestore'

const MainPage = () => {
  let [songs, updateSongs] = useState(data);
  const [isLogin, setLogin] = useState(true)
  const [keywordFilter, setKeywordFilter] = useState('')
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  useEffect(() => {
    let data2 = []
    getMusics(data2, () => { updateSongs(data2) })
    console.log(songs, "data")
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
    setCurrentSongIndex(uid - 1)
    console.log(uid)
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
      />
      <div className="container">
        <MainList
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
          onHandleClickMusic={onHandleClickMusic}
        />
      </div>

      <div className="musicbar">
        <CurrentSong
          currentSongIndex={currentSongIndex}
          songs={songs}
        />
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
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
