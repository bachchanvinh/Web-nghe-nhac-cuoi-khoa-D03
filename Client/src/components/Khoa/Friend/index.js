import React, { useEffect, useState } from 'react'
import FriendComponent from '../Friendcomponent'
import ChatGeneral from '../ChatGeneral'
import { getUsersin4ByUID } from '../../../controller/firebase/firestore'
import './style.css'

const Friend = (props) => {
    const { userIn4, isLogin, handleOutMenuChat } = props
    const [friendListUID, setFriendListUID] = useState([])
    const [userName, setUserName] = useState(undefined)
    const [friendListin4, setFriendListin4] = useState([])

    useEffect(() => {
        setFriendListUID(userIn4.friendList)
        setUserName(userIn4.userName)
        if (friendListUID !== undefined) {
            let mid = []
            getUsersin4ByUID(friendListUID, () => { setFriendListin4(mid) }, mid)

        }
    }, [userIn4, friendListUID])
    return (
        <div className="friend-khoa">
            <div className="friend-heading">
                <div className="friend-heading-title">Người liên hệ</div>
                <p className="outMenuChat" onClick={handleOutMenuChat}>X</p>
            </div>
            <div className="friend-wrap">
                <div>{isLogin && <FriendComponent friendListin4={friendListin4} />}</div>
            </div>

            <div className="chat-general">
                <ChatGeneral
                    isLoginprops={isLogin}
                    userNameprops={userName}
                />
            </div>
        </div>
    )
}

export default Friend
