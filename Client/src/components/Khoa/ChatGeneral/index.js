import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { io } from "socket.io-client";
import './style.css'

const ChatGeneral = () => {
    const [username, setUsername] = useState("Khoa");
    const [messageValue, setMessageValue] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [isLogin, setIsLogin] = useState(true);
    const socketRef = useRef(null);

    useEffect(() => {
        const socket = io("http://localhost:8080");
        socketRef.current = socket;

        socket.emit("NEW_USER", username);

        socket.on("NEW_MESSAGE", (message) => {
        setMessageList((prev) => [message,...prev]);
        });
    }, [])

    const handleSendMessage = (event) => {
        event.preventDefault();
        if (!socketRef.current) {
          return;
        }
    
        socketRef.current.emit("NEW_MESSAGE", messageValue);
        setMessageValue("")
      };

    return (
        <>
            <div className="chat-general-screen">
                {messageList.map((message) => {
                    return (
                    <div
                    key = {message.id}
                    className={`chat-general-group ${
                        socketRef.current.id === message.sender.socketId 
                        ? "my-message" : ""}`}
                        >
                            <p className="chat-name">{message.sender.username} :</p>
                            <p className="chat-mess">{message.content}</p>
                    </div>
                    );
                })}
            </div>
            <form className={isLogin === true ? "chat-general-form" : "chat-general-form please-sign" }
                onSubmit={handleSendMessage}>
                <input type="text" 
                    className="chat-general-form-item"
                    placeholder="Nói gì đó ..."
                    value={messageValue}
                    onChange={(event) => {
                        setMessageValue(event.target.value);
                    }}
                    />
                <Link to={"/signin"} className="chat-general-form-sign">Đăng nhập để chat</Link>
            </form>
        </>
    )
}

export default ChatGeneral
