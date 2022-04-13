import React, { useEffect, useState } from "react";
import "./client.css";
import io from "socket.io-client";
import Chat from "./Chat";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const socket = io.connect("http://localhost:4000");

function Client() {
  const navigate = useNavigate();
  const rooms = ["Research", "Coding Contest", "Hackathons", "Internship"];

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    console.log(room);
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  const getData = async (email) => {
    const userData = {
      email: email,
    };
    const config = { "Content-Type": "application/json" };
    const { data } = await axios.post(`api/v1/profile`, userData, config);
    if (data) {
      if (data.success === true) {
        setUsername(data.user.name);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userEmail") === null) {
      navigate("/login");
    } else {
      getData(localStorage.getItem("userEmail"));
    }
  }, [navigate]);

  return (
    <div className="client">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Name..."
            value={username}
            readonly="readonly"
            style={{padding:"5px"}}
          />
          <select
            className="room"
            required
            onClick={(e) => setRoom(e.target.value)}
          >
            <option value="">Choose Room</option>
            {rooms.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Client;
