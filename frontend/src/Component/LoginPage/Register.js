import { Container } from "@mui/material";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FaceIcon from "@mui/icons-material/Face";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import { Fragment, useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const fields = ["Research", "Coding Contest", "Hackathons", "Internship"];
  const roles = ["Student", "Faculty", "Researcher"];
  const interests = [
    "AI/ML",
    "WEB DEVELOPMENT",
    "APP DEVELOPMENT",
    "BLOCKCHAIN",
    "ClOUD COMPUTING",
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [field, setField] = useState("");
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState("");
  const [org, setOrg] = useState("");

  const registerSubmit = (e) => {
    e.preventDefault();
    let formData = {};
    formData["name"] = name;
    formData["email"] = email;
    formData["password"] = password;
    formData["field"] = field;
    formData["role"] = role;
    formData["interest"] = interest;
    formData["org"] = org;
    formSubmit(formData);
  };


  const formSubmit = async (formData) => {
    JSON.stringify(formData);
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(`/api/v1/register`, formData, config);
    if (data) {
      if (data.success === true) {
        localStorage.setItem("userEmail", data.user.email);
        navigate("/profile");
      }
    }
  };

  return (
    <Fragment>
      <div className="signUpContainer">
        <div className="signUpBox">
          <Typography variant="h4">REGISTER USER</Typography>
          <form
            className="signUpForm"
            onSubmit={registerSubmit}
          >
            <div className="signUpName" style={{marginTop:"3vmax"}}>
              <FaceIcon />
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="signUpEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signUpPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <PlaylistAddCheckOutlinedIcon />
              <select
                className="registerField"
                required
                onChange={(e) => setField(e.target.value)}
              >
                <option value="Research">Choose Field</option>
                {fields.map((fie) => (
                  <option key={fie} value={fie}>
                    {fie}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <SupervisorAccountOutlinedIcon />
              <select
                className="registerField"
                required
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Student">Choose Role</option>
                {roles.map((rol) => (
                  <option key={rol} value={rol}>
                    {rol}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <ThumbUpOutlinedIcon />
              <select
                className="registerField"
                required
                onChange={(e) => setInterest(e.target.value)}
              >
                <option value="BLOCKCHAIN">Choose Interest</option>
                {interests.map((inter) => (
                  <option key={inter} value={inter}>
                    {inter}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input className="signUpOrg" onChange={(e) => setOrg(e.target.value)} type="text" placeholder="Enter Your Organisation" />
            </div>
            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
