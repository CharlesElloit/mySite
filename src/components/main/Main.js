import makeStyles from "@material-ui/core/styles/makeStyles";
import { colors } from "../../components/constants/colors";
import About from "../about/About";
import ProfileImg from "../../images/me.jpg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    width: "85%",
    height: "65vh",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    background: colors.background_color
  },
  main_container: {
    width: "70%",
    minWidth: "65%",
    maxWidth: "70%",
    display: "flex",
    margin: "0 auto",
    background: colors.background_color
  },
  main_right: {
    width: "30%",
    paddingTop: "1rem",
    position: "relative"
  },
  imgContainer: {
    zIndex: 100,
    marginTop: "1rem",
    position: "absolute"
  },
  img: {
    height: 300,
    objectFit: "contain",
    opacity: 0.3,
    position: "absolute",
    borderRadius: 5
  },
  phone: {
    // width: "100px",
    fontSize: "70%",
    height: "300px",
    color: colors.white,
    position: "relative",
    transform: "rotate(90deg)",
    margin: "-1rem 0rem 0 1.5rem"
  }
});

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.main_container}>
        <About />
        <div className={classes.main_right}>
          <div className={classes.imgContainer}>
            <img className="img" src={ProfileImg} alt="" />
            <Typography className={classes.phone}>+256 (0)771687717</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
