import "./App.css";
import Home from "./Component/Home";
import Navigation from "./Component/Navigation/Navigation";
import Login from "./Component/LoginPage/Login";
import Register from "./Component/LoginPage/Register";
import Conference from "./Component/Opportunities/Conferences/Conference"
import Coding from "./Component/Opportunities/Coding/Coding"
import Hackathons from "./Component/Opportunities/Hackathons/Hackathons"
import Internships from "./Component/Opportunities/Internships/Internships"
import CfContest from "./Component/Opportunities/Coding/CfContest";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Profile from "./Component/User/Profile";
import Client from "./client/Client"
import Linked from "./Component/Opportunities/Internships/LinkedIn";
import {useEffect} from "react";
import WebFont from "webfontloader";
import Leetcode from  "./Component/Opportunities/Coding/Leetcode";
import Codechef from "./Component/Opportunities/Coding/Codechef";
import Ieee from "./Component/Opportunities/Conferences/Ieee";
import MLH from "./Component/Opportunities/Hackathons/MLH";


function App() {

  useEffect(() => {
    WebFont.load({
      google: { families: ["Lobster", "Roboto", "Drold Sans"] },
    });
  }, []);
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/conferences" element={<Conference/>} /> 
        <Route exact path="/coding" element={<Coding/>} /> 
        <Route exact path="/internships" element={<Internships/>} /> 
        <Route exact path="/hackathons" element={<Hackathons/>} /> 
        <Route exact path="/contest" element={<CfContest/>}/>
        <Route exact path="/profile" element={<Profile/>}/> 
        <Route exact path="/gosocial" element={<Client/>}/> 
        <Route exact path="/linked" element={<Linked/>}/> 
        <Route exact path="/leetcode" element={<Leetcode/>}/> 
        <Route exact path="/codechef" element={<Codechef/>}/> 
        <Route exact path="/ieee" element={<Ieee/>}/> 
        <Route exact path="/mlh" element={<MLH/>}/> 
       
      </Routes>
    </Router>
  );
}
export default App;
