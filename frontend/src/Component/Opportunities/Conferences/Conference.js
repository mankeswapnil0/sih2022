import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import {CardActionArea} from "@mui/material";

function Coding() {
  return (
    <Fragment>
      <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly"}}>
      <Card sx={{ maxWidth: 345, margin: 10, bgcolor:"orange" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image="https://3.bp.blogspot.com/-MEQbWHgj2GU/XhWkjdyL5uI/AAAAAAAAEc0/sJlhEwETdG8XWhzq1BN8btQWk1bIc2ZuQCLcBGAsYHQ/s1600/ieee-tvlp-icte-2020.jpg"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       IEEE Conferences
      </Typography>
          <Typography variant="body2" color="text.secondary">
          IEEE sponsors nearly 1,900 annual conferences and events worldwide, curating cutting-edge content for all of the technical fields of interest within IEEE.
          </Typography>
        </CardContent>
        <CardActions>
        
        <Button size="small"> <a style={{ textDecoration: "none", color: "blue" }} href="https://conferences.ieee.org/conferences_events/conferences/search?q=*&subsequent_q=&date=all&from=&to=&region=all&country=all&pos=0&sortorder=desc&sponsor=&sponsor_type=all&state=all&field_of_interest=all&sortfield=relevance">
              Let's Go
              </a></Button>
        </CardActions>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, margin: 10 , bgcolor:"orange"
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image="https://www.conference2go.com/wp-content/uploads/2021/06/rssconf-1.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      Research in Social Science
       </Typography>
          <Typography variant="body2" color="text.secondary">
           Research in Social Sciences is a leading conference in communications, law, politics, humanities,  education, and other 
           areas of social sciences. Beautiful Paris, France is the host of the event.
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small"> <a style={{ textDecoration: "none", color: "blue" }} href="https://www.rssconf.org/">
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
