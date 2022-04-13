import * as React from "react";
import CardActions from "@mui/material/CardActions";
import { Container, Card, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Codechef() {
  const [jobs, setJobs] = useState([]);

  const getData = async() => {
    const config = { headers: {"Content-Type": "application/json"}};
    const {data} = await axios.get("/api/v1/codechef", config);
    console.log(data);
    setJobs(data);
  }

  useEffect(() => {
    getData();
    console.log(jobs);
  }, []);

  return(
    <Container>
    {jobs &&  jobs.map((c) => (
        <Card sx={{margin:"20px"}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Contest Name: {c.name}
            </Typography>
              <Typography>
                Date :{c.date}
              </Typography>
              <Typography>
                Duration :{c.duration}
              </Typography>
              <Typography>
                <a style={{textDecoration:"none"}} href={c.link}>Contest Link</a>
              </Typography>
             
              
              
          </CardContent>
        </Card>
      ))}
  </Container>
  );
}

export default Codechef;
