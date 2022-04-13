import React, { Fragment } from "react";
import Carousel from "react-material-ui-carousel";
import "./Home.css";
import MouseIcon from '@mui/icons-material/Mouse';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import InfoCard from "./InfoCard";

function Home() {
  
  return (
    <Fragment>
        <div className="banner">
          <p>WELCOME TO</p>
          <h1>"GET NOTIFY"</h1>
          <a href="#container">
            <button>
              <MouseIcon size="20px" />
            </button>
          </a>
        </div>
      
      <div className="quickTour" id="container">
        <h1>Quick Tour</h1>
      </div>
      <div style={{ padding: "50px", justifyContent: "center" }}>
        <Card sx={{ margin: "25px" }}>
          <CardMedia
            component="img"
            image="https://www.devonblog.com/wp-content/uploads/2021/03/hackathon1.png"
            style={{ maxHeight: "80vh" }}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hackathons
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A hackathon is an event designed to use technology, primarily
              coding, to accomplish an objective. There’s no question that
              hackathons have taken the world by storm, spurring the development
              of everyday products and moving millions of dollars. And with the
              rise of hackathons for beginners and availability of online
              hacking classes (ethical hacking, of course), it's never been
              easier to get started! Want to explore more about Hackathons ,
              lets go...
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/hackathons">
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ margin: "25px" }}>
          <CardMedia
            component="img"
            image="https://www.tsunagulocal.com/wp-content/uploads/2021/05/internship-title-image-p24804776-2000x1302-1-1160x755.jpg"
            style={{ maxHeight: "80vh" }}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Internships
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An internship is a professional learning experience that offers
              meaningful, practical work related to a student’s field of study
              or career interest. An internship gives a student the opportunity
              for career exploration and development, and to learn new skills.
              It offers the employer the opportunity to bring new ideas and
              energy into the workplace, develop talent and potentially build a
              pipeline for future full-time employees. Do you want to learn and
              work? Then you are on right page. Here you can find Interships of
              you interest..
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/internships">
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ margin: "25px" }}>
          <CardMedia
            component="img"
            image="https://assets-global.website-files.com/5e5d43546b94f97f39c228fa/5e8b0177497f3ef99bdb3569_how-to-write-a-research-paper.png"
            style={{ maxHeight: "80vh" }}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Research/Conferences
            </Typography>
            <Typography variant="body2" color="text.secondary">
              "Research paper." What image comes into mind as you hear those
              words: working with stacks of articles and books, hunting the
              "treasure" of others' thoughts? Whatever image you create, it's a
              sure bet that you're envisioning sources of information--articles,
              books, people, artworks. Yet a research paper is more than the sum
              of your sources, more than a collection of different pieces of
              information about a topic, and more than a review of the
              literature in a field. A research paper analyzes a perspective or
              argues a point. Regardless of the type of research paper you are
              writing, your finished research paper should present your own
              thinking backed up by others' ideas and information. Do you like
              to research? Then what are you waiting for? Here you can find
              upcoming research/conferences, seminar.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/conferences">
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ margin: "25px" }}>
          <CardMedia
            component="img"
            image="https://miro.medium.com/max/1200/0*mzvVR28RxdFG9XpZ"
            style={{ maxHeight: "80vh" }}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Coding Contests/ Competitive Coding
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Coding, sometimes called computer programming, is how we
              communicate with computers. Code tells a computer what actions to
              take, and writing code is like creating a set of instructions. By
              learning to write code, you can tell computers what to do or how
              to behave in a much faster way. You can use this skill to make
              websites and apps, process data, and do lots of other cool things.
              Do you like to want to explore more about coding competetions?
              Then what are you waiting for? Here you can find upcoming coding
              contests.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/coding">
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </Fragment>
  );
}

export default Home;
