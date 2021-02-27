import { useState } from "react";
import "./styles.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { colors, fonts } from "../../components/constants/colors";
import FrameWorks from "./FrameWorks.js";
import Languages from "./Langauge.js";
import ToolsUsed from "./ToolsUsed.js";

const styles = {
  toolsContainer: {
    width: "80%",
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    background: colors.background_color
  },
  main_left: {
    marginTop: "-50%"
  },
  title: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: colors.white,
    textTransform: "capitalize",
    marginBottom: "3rem"
  },
  link: {
    fontWeight: "bold",
    color: colors.orangeColor,
    textTransform: "capitalize"
  },
  tools_container: {
    width: "30%",
    padding: "0 0 0 40px",
    borderRadius: 10,
    zIndex: 200,
    display: "flex"
  },
  toolsDetails: {
    width: "70%",
    fontSize: "68%",
    color: colors.white,
    lettingSpacing: 1.5,
    fontFamily: fonts.fontFamily
  },
  about: {
    margin: "1rem 0",
    fontWeight: "bold",
    color: colors.white,
    fontFamily: fonts.fontFamily
  },
  experience: {
    fontSize: 60,
    display: "flex",
    marginTop: "1rem",
    alignItems: "center",
    justifyContent: "flex-start",
    color: colors.orangeColor,
    fontWeight: "bolder",
    fontFamily: fonts.fontFamily
  },
  experience_text: {
    fontSize: ".8rem",
    fontWeight: 900,
    letterSpacing: 0.5,
    paddingLeft: 5,
    marginTop: "1rem",
    color: colors.white,
    fontFamily: fonts.fontFamily
  },
  experience_container: {
    display: "flex",
    alignItems: "center",
    fontFamily: fonts.fontFamily,
    justifyContent: "flex-start"
  },
  line: {
    height: 160,
    marginRight: -20,
    position: "absolute",
    color: colors.orangeColor,
    borderLeft: `2px solid ${colors.secondary_background}`
  },
  bar: {
    height: 60,
    marginTop: 20,
    borderRadius: 50,
    position: "absolute",
    color: colors.orangeColor
    //  borderLeft: `2px solid ${colors.orangeColor}`
  }
};

const Tools = ({ classes }) => {
  const [showFrameworks, setShowFrameworks] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showTools, setShowTools] = useState(false);

  const handleFrameworks = () => {
    setShowFrameworks(true);
    setShowTools(false);
    setShowLanguages(false);
    //  const ul = document.querySelector(".navigation_link");
    //  console.log(ul);
  };

  const handleLanguages = () => {
    setShowLanguages(true);
    setShowTools(false);
    setShowFrameworks(false);
  };

  const handleTools = () => {
    setShowTools(true);
    setShowLanguages(false);
    setShowFrameworks(false);
  };
  return (
    <div className={classes.toolsContainer}>
      <div className={classes.main_left}>
        <Typography className={classes.title} variant="caption">
          Few tools and technologies i've been working with recently.
        </Typography>
        <br />
        <br />
        <br />
        <span className={classes.line}>
          <span className={classes.bar}></span>
        </span>
        <div className="container">
          <div className={classes.tools_container}>
            <div className="navigation">
              <ul className="navigation_link">
                <li className="navigation_links active ">
                  <button onClick={() => handleLanguages("languages")}>
                    Languages
                  </button>
                </li>
                <li className="navigation_links">
                  <button onClick={() => handleFrameworks("frameworks")}>
                    Frameworks
                  </button>
                </li>
                <li className="navigation_links">
                  <button onClick={() => handleTools("languages")}>
                    Tools
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.toolsDetails} variant="caption">
            {showLanguages ? (
              <Languages />
            ) : showFrameworks ? (
              <FrameWorks />
            ) : showTools ? (
              <ToolsUsed />
            ) : (
              <Languages />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Tools);
