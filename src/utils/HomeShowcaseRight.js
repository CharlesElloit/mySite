import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { colors, fonts } from "../components/constants/colors.js";
import { Slide } from "@material-ui/core";
import dayjs from "dayjs";

const useStyles = makeStyles({
  dayInfo: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "25%",
    alignItems: "center",
    fontFamily: fonts.fontFamily
  },
  location: {
    margin: "1rem 0",
    fontWeight: "bold",
    color: colors.white,
    fontFamily: fonts.fontFamily
  },
  desc: {
    fontSize: ".8rem",
    color: colors.white,
    fontFamily: fonts.fontFamily
  },
  phone: {
    fontSize: ".8rem",
    fontFamily: fonts.fontFamily,
    color: colors.orangeColor
  },
  email: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: ".8rem",
    margin: "10% 0 0 90%",
    position: "absolute",
    transform: "rotate(90deg)",
    color: colors.orangeColor
  },
  time: {
    fontSize: "1.5rem",
    fontWeight: 600,
    margin: "1rem 0 1rem 0",
    color: colors.pureWhiteColor,
    fontFamily: fonts.fontFamily
  },
  line: {
    width: 200,
    borderBottom: `1px solid ${colors.orangeColor}`
  }
});

function HomeShowcaseLeft() {
  const classes = useStyles();

  const time = dayjs(Date.now()).format("HH : mm : ss a");

  return (
    <Slide direction="left" in={true} timeout={3000}>
      <div>
        <div className={classes.dayInfo}>
          {/* <Typography className={classes.desc} variant="caption">
            Today's &nbsp; {new Date().toDateString()} <br />
          </Typography>
          <Typography className={classes.time} variant="h2">
            {time}
          </Typography> */}
        </div>
        <Typography className={classes.email}>
          <div className={classes.email_container}>
            acifor.charles@gmail.com
          </div>
          <div className={classes.line}></div>
        </Typography>
      </div>
    </Slide>
  );
}

export default HomeShowcaseLeft;
