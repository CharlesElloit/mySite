import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { colors, fonts } from "../../components/constants/colors";

const styles = {
  main_left: {
    zIndex: 100,
    width: "100%",
    paddingTop: "1rem"
  },
  title: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: colors.white,
    textTransform: "capitalize"
  },
  link: {
    fontWeight: "bold",
    color: colors.orangeColor,
    textTransform: "capitalize"
  },
  desc_container: {
    width: "95%",
    padding: "0 0 0 40px",
    borderRadius: 10,
    overflowY: "scroll"
  },
  desc: {
    width: "40%",
    marginTop: 20,
    fontSize: "75%",
    lettingSpacing: 1.5,
    color: colors.white,
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
    height: 240,
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
    color: colors.orangeColor,
    borderLeft: `2px solid ${colors.orangeColor}`
  }
};

const About = ({ classes }) => (
  <div className={classes.main_left}>
    <Typography className={classes.title} variant="caption">
      03. About me
    </Typography>
    <br />
    <br />
    <span className={classes.line}>
      <span className={classes.bar}></span>
    </span>
    <div className="desc_container">
      <Typography className={classes.desc} variant="caption">
        Yello, little about me, I'm Charles Elloit a software engineer, base in
        Uganda Kampala. Personal, I mostly enjoy creating whethere been website,
        application or CLI and experimenting new technologies, I like
        discussion, challenges and helping others solve their own problem using
        the technologies i know. Sharing knowledge is part of my goal within the
        community but mostly, in building successfully and hight performant
        products. The main area where my expertise fall is frontend (Client
        side) with React, mobile app with React Native and backend (Server side)
        with Nodejs. Currently studying Information Technology at ISBAT
        University
      </Typography>
    </div>
  </div>
);

export default withStyles(styles)(About);
