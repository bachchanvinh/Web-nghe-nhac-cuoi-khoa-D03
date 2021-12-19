import React, { useEffect } from 'react'

const FriendComponent = (props) => {

    const { friendListin4 } = props
    useEffect(() => {
        console.log(friendListin4)
    }, [friendListin4])
    return (
        <div className="friend-list">
            {friendListin4.map((inf) => {
                return (
                    <div className="friend-list-item">
                        <img alt="avatar" className="friend-list-img" src={inf.ava_src}></img>
                        <span className="friend-list-name">{inf.userName}</span>
                    </div>
                )
            })
            }
        </div>

    )
}

export default FriendComponent
