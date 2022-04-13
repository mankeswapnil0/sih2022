import axios from "axios";
import React, { Fragment, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import VerifiedIcon from '@mui/icons-material/Verified';
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [field, setField] = useState("");
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState("");
  const [org, setOrg] = useState("");
  const [status, setStatus] = useState("");

  const getUserData =  async(email) => {
    const userData = {
      "email":email
    };
    const config = {"Content-Type":"application/json"}
    const { data } = await axios.post(`api/v1/profile`, userData, config);
    setName(data.user.name);
    setEmail(data.user.email);
    setField(data.user.field);
    setRole(data.user.role);
    setInterest(data.user.interest);
    setOrg(data.user.org);
    setStatus(data.user.status);
  }

  useEffect(() => {
    if(localStorage.getItem("userEmail")===null){
      navigate("/");
    }else{
      getUserData(localStorage.getItem("userEmail"));
    }
  }, [navigate])
  

  return (
    <Fragment>
      <div className="profileContainer">
        <div>
          <h1>My Profile</h1>
          <img src="https://whiskycast.com/wp-content/plugins/instagram-widget-by-wpzoom/assets/backend/img/user-avatar.jpg" alt="profile"/>
          <Link to="/">Back To Homepage</Link>
        </div>
        <div>
          <div>
            <h4>Full Name:</h4>
            <p>{name}</p>
          </div>
          <div>
            <h4>Email:</h4>
            <p>{email}</p>
          </div>
          <div>
            <h4>Interest</h4>
            <p>{interest}</p>
          </div>
          <div>
            <h4>Field</h4>
            <p>{field}</p>
          </div>
          <div>
            <h4>Role</h4>
            <p>{role}</p>
          </div>
          <div>
            <h4>Organisation:</h4>
            <p>{org}</p>
          </div>
          <div>
            <h4>Status:</h4>
            <p>{status}</p>
            {status==="verified" && <VerifiedIcon color="primary" />}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
