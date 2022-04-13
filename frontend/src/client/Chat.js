import React, { useEffect, useState } from 'react'
import "./client.css";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({socket, username, room}) {

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async(e) => {
        e.preventDefault();
        if(currentMessage!==""){
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }
            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        })
    }, [socket])

  return (
    <div className='chatWindow'>
        <div className='chatHeader'>
            <p>Live Chat{` - ${room} Room`}</p>
        </div>
        <div className='chatBody'>
            <ScrollToBottom className="messageContainer">
            {messageList.map((messageContent) => (
                <div className='message' id={username===messageContent.author ? "you" : "other"}>
                    <div>
                        <div className='messageContent'>
                            <p>{messageContent.message}</p>
                        </div>
                        <div className='messageMeta'>
                            <p id="time">{messageContent.time}</p>
                            <p id="author">{messageContent.author}</p>
                        </div>
                    </div>
                </div>
            ))}
            </ScrollToBottom>
        </div>
        <form className='chatFooter'>
            <input value={currentMessage} type="text" placeholder="Type a message..." onChange={(e) => setCurrentMessage(e.target.value)} />
            <button type="submit" onClick={sendMessage}>&#9658;</button>
        </form>
    </div>
  )
}

export default Chat