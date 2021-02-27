import Typography from "@material-ui/core/Typography";

import Header from "../components/header/Header.js";
import Showcase from "../components/showcase/Showcase.js";
import HomeShowcaseLeft from "../utils/HomeShowcaseLeft";
import HomeShowcaseCenterImg from "../utils/HomeShowcaseCenterImg";
import HomeShowcaseRight from "../utils/HomeShowcaseRight";

function Courses() {
  return (
    <div>
      <Header />
      <Showcase
        Component1={HomeShowcaseLeft}
        Component2={HomeShowcaseCenterImg}
        Component3={HomeShowcaseRight}
      />
      <Typography>Course</Typography>
    </div>
  );
}

export default Courses;
