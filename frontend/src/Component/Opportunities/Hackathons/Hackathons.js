import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import {CardActionArea} from "@mui/material";
import {Link} from "react-router-dom";

function Coding() {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
      <Card sx={{ maxWidth: 345, margin: 10, bgcolor:"orange" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image="https://pbs.twimg.com/profile_images/1184141979493568515/NMa0vlIb_400x400.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hackathons on Major League Hacking
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Major League Hacking (MLH) is the official student hackathon
            league. Each year, we power over 200 weekend-long invention
            competitions that inspire innovation, cultivate communities and
            teach computer science skills to more than 65,000 students around
            the world.
          </Typography>
        </CardContent>
        <CardActions>
        <Link to="/mlh">
          <Button size="small">
           
              Let's Go
          
            </Button>
            </Link>
        </CardActions>
        </CardActionArea>
      </Card> 

        <Card sx={{ maxWidth: 345, margin: 10,height:"380px", bgcolor:"orange" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt=""
            height="140"
            image="https://cdn.icon-icons.com/icons2/2699/PNG/512/devpost_logo_icon_169280.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hackathons on Devpost
            </Typography>
            <Typography variant="body2" color="text.secondary">
              They power most of the world’s software competitions (hackathons)
              on our platform.
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" style={{bottom:"20%"}}> <a style={{ textDecoration: "none", color: "black" }} href="https://devpost.com/hackathons">
              Let's Go
              </a></Button>
          </CardActions>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 355, margin: 10,height:"400px", bgcolor:"orange" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt=""
            height="140"
            image="https://devfolio.co/blog/content/images/2021/04/Artboard-7.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hackathons on Devfolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              They are the hosts of India's largest community hackathon
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{}}> <a style={{ textDecoration: "none", color: "black" }} href="https://devfolio.co/hackathons">
              Let's Go
              </a></Button>
          </CardActions>
          </CardActionArea>
        </Card>

       
      </div>
    </Fragment>
  );
}
export default Coding;
