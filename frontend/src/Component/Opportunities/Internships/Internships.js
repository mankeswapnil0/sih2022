import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import {CardActionArea} from "@mui/material";

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
  <Card sx={{ maxWidth: 355, margin: 10 ,bgcolor:"black"}}>
  <CardActionArea>
  <CardMedia
    component="img"
    alt=""
    height="140"
    image="https://telanganatoday.com/wp-content/uploads/2021/09/LinkedIn-to-suspend-its-Stories-feature-on-September-30.jpg"
  />
  <CardContent>
  <Typography gutterBottom variant="h5" component="div">
LinkedIn
</Typography>
    <Typography variant="body2" color="text.secondary" style={{color:"white"}}>
    LinkedIn is the world's largest professional network on the internet. You caneed to succeed in your career.
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small" style={{color:"white"}}>
    <Link to="/linked">Let's Go
   </Link>
    </Button>
  </CardActions>
  </CardActionArea>
</Card>
  

<Card sx={{ maxWidth: 355, margin: 10 ,bgcolor:"black"}}>
<CardActionArea>
<CardMedia
  component="img"
  alt=""
  height="140"
  image="https://media.glassdoor.com/sqll/901048/internshala-squarelogo-1498117159315.png"/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
Internshala
</Typography>
  <Typography variant="body2" color="text.secondary" style={{color:"white"}}>
    Internshala is an internship and online training platform
  </Typography>
</CardContent>
<CardActions>
  <Button size="small"><a href="https://internshala.com/" >
     Let's Go</a></Button>
</CardActions>
</CardActionArea>
</Card>

<Card sx={{ maxWidth: 345, margin: 10,bgcolor:"black" }}>
<CardActionArea>
    <CardMedia
      component="img"
      alt=""
      height="140"
      image="https://pbs.twimg.com/media/FM50CpMWQAA6Qnt.png"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
Indeed
  </Typography>
      <Typography variant="body2" color="text.secondary" style={{color:"white"}}>
      Indeed strives to put job seekers first, giving them free access to search for jobs, post resumes, and research companies.
      </Typography>
    </CardContent>
    <CardActions>
    
      <Button size="small">
       <a href="https://in.indeed.com/">
     Let's Go</a>
      </Button>
    </CardActions>
    </CardActionArea>
  </Card>
    <Card sx={{ maxWidth: 345, margin: 10 ,bgcolor:"black"}}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="https://lever-client-logos.s3.us-west-2.amazonaws.com/4a3d283a-e658-47f0-b4d5-5d6f92e3eb6f-1617124920844.png"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
  AngelList
    </Typography>
        <Typography variant="body2" color="text.secondary" style={{color:"white"}}>
        AngelList India works best when a syndicate lead is able to build conviction around a particular opportunity, 
        convince the founder to give an allocation in an ongoing investment round so that he/she can 
        invite backers from their network and/or invite 'The Collective' to invest into their syndicate.
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button size="small">
         <a href="https://angel.co/">
         Let's Go</a>
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
      </div>
    </Fragment>
  );
}
export default Coding;

