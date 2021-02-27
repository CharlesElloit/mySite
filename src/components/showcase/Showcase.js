import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { colors, fonts } from "../constants/colors.js";

const useStyles = makeStyles({
  showcase: {
    height: "100vh",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    background: colors.background_color
  },
  showcase_content: {
    width: "70%",
    margin: "0 auto",
    display: "flex",
    fontFamily: fonts.fontFamily
  },
  left: {
    width: "50%",
    zIndex: 100
  },

  right: {
    width: "50%",
    position: "relative",
    margin: "5% 0 0 15%"
  }
});

export default function Showcase({ Component1 }) {
  const classes = useStyles();
  return (
    <div className={classes.showcase}>
      <div className={classes.showcase_content}>
        <div className={classes.left}>
          <Component1 />
        </div>
        {/* <div className={classes.right}>
          <Component3 />
        </div> */}
      </div>
    </div>
  );
}
