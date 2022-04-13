import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );
    if (data) {
      if (data.success === true) {
        localStorage.setItem("userEmail", data.user.email);
        navigate("/profile");
      }
    }
  };

  return (
    <Fragment>
      <div className="loginContainer">
        <div className="loginBox">
          <Typography variant="h4">User Login</Typography>
          <form className="loginForm" onSubmit={login}>
            <div className="loginEmail" style={{marginTop:"-5vmax"}}>
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="loginButton" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
