import React, {useState, useEffect} from 'react'
import MainList from '../MainList'
import MainMenu from '../MainMenu'
import './style.css'
import {data} from '../../../constants/data_fake'
import CurrentSong from '../CurrentSong'
import Player from '../Player'
import NextSong from '../NextSong'

const MainPage = () => {
    let [songs] = useState(data);
    const [keywordFilter, setKeywordFilter] = useState('')

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

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
    }

    const onSearch = (key) => {
      setKeywordFilter(key.toLowerCase())
    }

    if(keywordFilter) {
      songs = songs.filter((song) => {
        return song.name.toLowerCase().indexOf(keywordFilter) !== -1 }
      );
    }
    
    return (
        <div className="main-khoa">
            <MainMenu 
              onSearch = {onSearch}
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
