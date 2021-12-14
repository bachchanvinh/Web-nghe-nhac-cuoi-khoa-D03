import React from 'react'
import MainItem from '../MainItem'
import './style.css'

const MainList = (props) => {
    const {onHandleClickMusic, currentSongIndex, songs, isActiveId} = props
    
    return (
        <div className="row main-list-khoa">
            <div className="main-title">
                <div className="title-name">Tên bài hát</div>
                <p className="title-singer">Tên nghệ sĩ</p>
                <p className="title-time">Thời gian</p>
                <div className="title-like">Add to playlist</div>
            </div>

            {songs.map((song) => {
                return <MainItem  
                key = {song.uid}
                song={song}
                onHandleClickMusic={onHandleClickMusic}
                currentSongIndex={currentSongIndex}
                isActiveId={isActiveId}
                />
            })}
        </div>
    )
}

export default MainList
