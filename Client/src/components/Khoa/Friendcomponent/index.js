import React from 'react'

const FriendComponent = (props) => {

    const { username, src } = props

    return (
        <div className="friend-list-item">
            <img alt="avatar" className="friend-list-img" src={src}></img>
            <span className="friend-list-name">{username}</span>
        </div>
    )
}

export default FriendComponent