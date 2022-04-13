import * as React from "react";
// import CardActions from "@mui/material/CardActions";
import { Container, Card, CardContent, Typography } from "@mui/material";
// import Button from "@mui/material/Button";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../Loader/Loader";

function MLH() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.get("/api/v1/mlh", config);
    console.log(data);
    setJobs(data);
    setLoading(true);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      {!loading ? (
        <Loader />
      ) : (
        <Container>
          {jobs &&
            jobs.map((c) => (
              <Card sx={{ margin: "20px" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Contest Name: {c.name}
                  </Typography>
                  <Typography>Date :{c.date}</Typography>
                  <a href={`${c.link}`}>
                    <Typography>Click to Know More</Typography>
                  </a>
                </CardContent>
              </Card>
            ))}
        </Container>
      )}
    </Fragment>
  );
}

export default MLH;
