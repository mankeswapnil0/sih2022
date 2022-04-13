// https://ieeexploreapi.ieee.org/api/v1/search/articles?parameter&apikey=m87pmna2a2v4jwqdtvpyfj77
import { Container, Card, CardContent, Typography } from "@mui/material";
import { useState, useEffect, Fragment } from "react";
import Loader from "../../Loader/Loader";
import axios from "axios";


const CfContest = () => {
  const [contest, setContest] = useState([]);
  const[loading, setLoading] = useState(false);
  function isValid(res) {
    if (res.phase === "BEFORE") return res;
  }

  async function fetchContest() {
    const config = {"Content-Type":"application/json"};
    const data = await axios.get(
      "https://ieeexploreapi.ieee.org/api/v1/search/articles?parameter&apikey=m87pmna2a2v4jwqdtvpyfj77",
      config
    );
    setContest(data.data.articles);
    setLoading(true);
  }

  useEffect(() => {
    fetchContest();
  }, []);

  function getDate(relativeTimeSeconds) {
    let time = Date(relativeTimeSeconds * 1000);
    const dateObject = new Date(time);

    const humanDateFormat = dateObject.toLocaleString();
    return humanDateFormat;
  }
  return (
    <Fragment>
      {!loading ? (
        <Loader />
      ) : (
        <Container>
          {contest &&
            contest.map((c) => (
              <Card  className="codingCard" >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {c.name}
                  </Typography>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href={`https://www.ieee.org/publications/index.html${c.id}`}
                  >
                    <Typography>
                      Contest ID :{c.id}- Click here to know more
                    </Typography>
                  </a>
                  <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Example+Google+Calendar+Event&details=More+help+see:+https://support.google.com/calendar/thread/81344786&dates=20201231T160000/20201231T170000&recur=RRULE:FREQ%3DWEEKLY ">
                    <Typography>
                      Contest Time :{getDate(c.relativeTimeSeconds)}
                    </Typography>
                  </a>
                </CardContent>
              </Card>
            ))}
        </Container>
      )}
    </Fragment>
  );
};

export default CfContest;
