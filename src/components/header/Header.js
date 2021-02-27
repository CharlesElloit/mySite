import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "react-router-dom";
import { colors, fonts } from "../constants/colors";
// import IconButton from "@material-ui/core/IconButton";
// import GithubIcon from "@material-ui/icons/GitHub";

import logo from "../../images/charles-logo.png";

const useStyles = makeStyles({
  header: {
    height: 60,
    width: "100%",
    marginBottom: "20%",
    position: "fixed",
    color: colors.white,
    zIndex: 200,
    fontFamily: fonts.fontFamily,
    background: colors.background_color
  },
  header_content: {
    width: "75%",
    display: "flex",
    margin: "1rem auto",
    fontFamily: fonts.fontFamily,
    justifyContent: "space-between"
  },
  links: {
    listStyle: "none",
    margin: "1rem 1rem",
    fontSize: ".8rem",
    fontWeight: "bold",
    color: colors.white,
    outlineWidth: 0,
    outlineStyle: 0,
    fontFamily: fonts.fontFamily,
    textDecoration: "none"
  },
  lightMode: {
    color: colors.white
  },
  logo: {
    display: "flex",
    alignItems: "center"
  },
  logoText: {
    outlineStyle: "none",
    outlineWidth: "none",
    fontWeight: "bolder",
    color: colors.white,
    textDecoration: "none"
  },
  ul: {
    display: "flex"
  },
  logo__img: {
    width: "1rem",
    transform: "rotate(90deg)"
  }
});

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <div className={classes.logo}>
          {/* <img className={classes.logo__img} src={logo} alt="logo" /> */}
          <Link className={classes.logoText} to="/">
            &nbsp;Portfolio
          </Link>
        </div>
        <ul className={classes.ul}>
          <Link to="/courses" className={classes.links}>
            Courses
          </Link>
          {/* <IconButton
            component={Link}
            to="https://github.com/CharlesElloit"
            target="__blank"
            className={classes.lightMode}
          >
            <GithubIcon />
          </IconButton> */}
        </ul>
      </div>
    </header>
  );
}

export default Header;
