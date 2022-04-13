import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { CardActionArea } from '@mui/material';

function Coding() {
  return (
    <Fragment>
      <div
        className="coding"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Card sx={{ width: 445, margin: 10 , bgcolor:"orange"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt=""
            height="140"
            image="http://yxxshin.github.io/images/CodeForces_Cover.jpg"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Check Out the upcoming contest
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="/contest">Let's Go</a>
            </Button>
          </CardActions>
          </CardActionArea>
        </Card>

        <Card sx={{ width: 445, margin: 10 ,bgcolor:"orange"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt=""
            height="140"
            image="https://i.ytimg.com/vi/nzegqnNSno0/hqdefault.jpg"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Check Out the upcoming contest
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Let's Go</Button>
          </CardActions>
          </CardActionArea>
        </Card>

        <Card sx={{ width: 445, margin: 10,bgcolor:"orange" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt=""
            height="140"
            image="https://leetcode.com/static/images/LeetCode_Sharing.png"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Check Out the upcoming contest
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Let's Go</Button>
          </CardActions>
          </CardActionArea>
        </Card>

        <Card sx={{ width: 445, margin: 10 ,bgcolor:"orange"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt=""
            height="140"
            image="https://www.digitalfirstmagazine.com/wp-content/uploads/2020/05/interviewbit-550x330.jpg"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Check Out the upcoming contest
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" >Let's Go</Button>
          </CardActions>
          </CardActionArea>
        </Card>
      </div>
    </Fragment>
  );
}
export default Coding;
