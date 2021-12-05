import React, {useState, useEffect} from 'react'
import MainList from '../MainList'
import MainMenu from '../MainMenu'
import './style.css'
import {data} from '../../../constants/data_fake'

const MainPage = () => {
    const [songs] = useState(data);

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
    
    return (
        <div className="main-khoa">
            <MainMenu />
            <div className="container">
                <MainList
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
                />
            </div>
        </div>
    )
}

export default MainPage
