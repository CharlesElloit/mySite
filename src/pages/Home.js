import Showcase from "../components/showcase/Showcase.js";
import Main from "../components/main/Main";
import HomeShowcaseLeft from "../utils/HomeShowcaseLeft";
import HomeShowcaseRight from "../utils/HomeShowcaseRight.js";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Header from "../components/header/Header.js";
import Tools from "../components/tools/Tools.js";

const useStyles = makeStyles({
  container: {
    width: "100%",
    overflow: "hidden",
    position: "relative"
  },
  img: {
    top: 100,
    width: "100%",
    height: "100vh",
    opacity: 0.3,
    transform: "rotate(25deg)",
    position: "absolute"
  },
  tools: {
    width: "60%",
    height: "90vh",
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <div>
        <Showcase
          Component1={HomeShowcaseLeft}
          Component3={HomeShowcaseRight}
        />
        <Main />
        <div className={classes.tools}>
          <Tools />
        </div>
      </div>
    </div>
  );
}
