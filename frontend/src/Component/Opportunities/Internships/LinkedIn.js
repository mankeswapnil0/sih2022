import React, {Fragment} from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../Loader/Loader";

function LinkedIn() {
  const [jobs, setJobs] = useState([]);
  const[loading, setLoading] = useState(false);

  const getData = async() => {
    const config = { headers: {"Content-Type": "application/json"}};
    const {data} = await axios.get("/api/v1/linkedIn", config);
    console.log(data);
    setJobs(data);
    setLoading(true);
  }

  useEffect(() => {
    getData();
  }, []);

  return(
    <Fragment>
      {!loading ? (
        <Loader />
      ) : (
        <Container>
          {jobs &&
            jobs.map((c) => (
              <Card sx={{margin:"20px"}}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Job/Internship Name: {c.name}
                  </Typography>
                    <Typography>
                      Company Name :{c.company_name}
                    </Typography>
                    <Typography>
                      Location :{c.location}
                    </Typography>
                </CardContent>
              </Card>
            ))}
        </Container>
      )}
    </Fragment>
  );
}

export default LinkedIn;
