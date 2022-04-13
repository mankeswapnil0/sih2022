import { Container, Card, CardContent, Typography } from "@mui/material";
import { useState, useEffect, Fragment } from "react";
import Loader from "../../Loader/Loader";
import axios from "axios";
import "./CfContest.css";

const CfContest = () => {
  const [contest, setContest] = useState([]);
  const[loading, setLoading] = useState(false);
  function isValid(res) {
    if (res.phase === "BEFORE") return res;
  }

  async function fetchContest() {
    const data = await axios.get(
      "https://codeforces.com/api/contest.list?key=909853b5eb6ec8568cef0e52667fac7c58a43083&secret=4f3deaf795b17eb8975cf38d647c90aee67f6966"
    );

    setContest(data.data.result.filter(isValid));
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
                    href={`https://codeforces.com/contests/${c.id}`}
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
