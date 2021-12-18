import React, { useEffect, useState } from 'react'
import FriendComponent from '../Friendcomponent'
import ChatGeneral from '../ChatGeneral'
import './style.css'

const Friend = (props) => {
    const { userIn4 } = props
    const [handelpropschange, setChange] = useState(userIn4)
    const [friendListUID, setFriendListUID] = useState(userIn4.friendList)
    // const frienList = () => {
    //     console.log(userIn4.frienList)
    // }
    useEffect(() => {
        setChange(userIn4)
        setFriendListUID(userIn4.friendList)

        console.log(friendListUID)
        // friendListUID.map((ele) => console.log(ele))
    }, [friendListUID, handelpropschange])
    return (
        <div className="friend-khoa">
            <div className="friend-wrap">
                <div className="friend-heading">
                    <div className="friend-heading-title">Người liên hệ</div>
                    <i className="friend-heading-icon fas fa-user-plus"></i>
                </div>
                <div className="friend-list">

                    {/* {
                        friendlist.map((fr) => {
                            <FriendComponent username={fr.userName} src={fr.ava_src} />
                        })
                    } */}
                    <FriendComponent username={`vinh`} src={'/assets/vinh.jpg'} />

                </div>
            </div>
            <div className="chat-general">
                <ChatGeneral />
            </div>
        </div>
    )
}

export default Friend
