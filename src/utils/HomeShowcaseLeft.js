import { Fragment } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { colors, fonts } from "../components/constants/colors";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Slide } from "@material-ui/core";

const useStyles = makeStyles({
  bounds: {
    marginTop: 50,
    position: "absolute"
  },
  btn: {
    margin: "10% -1rem 5% 1rem",
    display: "flex",
    color: colors.white,
    fontSize: ".8rem",
    padding: ".2rem 1rem",
    textTransform: "capitalize",
    borderRadius: 20,
    border: `1px solid ${colors.white}`
  },
  callToAction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  leftContainer: {
    marginTop: "28%"
  },
  download_resume: {
    margin: "10% 0 5% 0",
    display: "flex",
    color: colors.white,
    fontSize: ".8rem",
    padding: ".2rem 1rem",
    textTransform: "capitalize",
    borderRadius: 20,
    border: `1px solid ${colors.white}`
  },
  greeting: {
    padding: "1rem 0 1rem 0",
    fontSize: "1rem",
    marginTop: 10,
    fontFamily: fonts.fontFamily,
    color: colors.white
  },
  icon: {
    fontSize: 14
  },
  link: {
    textDecoration: "none",
    fontSize: ".7rem",
    marginLeft: 10,
    color: colors.orangeColor,
    fontFamily: fonts.fontFamily
  },
  name: {
    fontSize: "1.5rem",
    fontWeight: 600,
    margin: "1rem 0 1rem 0",
    color: colors.pureWhiteColor,
    fontFamily: fonts.fontFamily
  },
  social: {
    fontSize: ".7rem",
    color: colors.orangeColor,
    fontFamily: fonts.fontFamily
  },
  social_container: {
    display: "flex",
    alignItems: "center",
    margin: "10% 0 10% 0%"
  },
  bio: {
    fontSize: "75%",
    color: colors.white,
    fontFamily: fonts.fontFamily
  }
});

function HomeShowcaseLeft() {
  const classes = useStyles();

  return (
    <div className={classes.leftContainer}>
      <Slide direction="down" timeout={1500} in={true}>
        <div>
          <>
            <Typography variant="caption" className={classes.greeting}>
              Bienvenue!
            </Typography>
            <br />
            <Typography variant="caption" className={classes.greeting}>
              My name is &nbsp; <ArrowDownwardIcon />
            </Typography>

            <Typography className={classes.name} variant="h2">
              Charles Elloit.
            </Typography>
          </>
          <Typography variant="caption" className={classes.bio}>
            I'm a software engineer, Base in Uganda Kampala, Focus on Full Stack
            Web development and a bit of mobile app development as well. Am
            passionated
          </Typography>
        </div>
      </Slide>

      <div className={classes.callToAction}>
        <Slide direction="right" timeout={3000} in={true}>
          <Button
            component={Link}
            to="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            className={classes.download_resume}
          >
            Download Resume &nbsp;{" "}
            <ArrowDownwardIcon className={classes.icon} />
          </Button>
        </Slide>
        <Slide direction="right" timeout={2000} in={true}>
          <Button
            to="/mailto:aciforcharles@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.btn}
            component={Link}
          >
            Get In Touch
          </Button>
        </Slide>
      </div>
      <div className={classes.social_container}>
        <Slide direction="right" timeout={4000} in={true}>
          <Button
            className={classes.social}
            target="_blank"
            rel="noopener noreferrer"
            component={Link}
            to="/https://twitter"
          >
            Twitter
          </Button>
        </Slide>

        <Slide direction="right" timeout={3000} in={true}>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            className={classes.social}
            component={Link}
            to="https://github.com/CharlesElloit"
          >
            GitHub
          </IconButton>
        </Slide>
        <Slide direction="right" timeout={2000} in={true}>
          <IconButton
            target="_blank"
            component={Link}
            to="https://www.linkedin.com/in/charles-silvano-937867199"
            className={classes.social}
          >
            LinkedIn
          </IconButton>
        </Slide>

        <Slide direction="right" timeout={2000} in={true}>
          <div>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/charles-silvano-937867199"
              className={classes.link}
            >
              E: aciforcharles@gmail.com
            </Link>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default HomeShowcaseLeft;
