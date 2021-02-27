import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import ToolsAndTech from "./ToolsAndTech";
import "./newcss.css";

const useStyles = makeStyles({
  title: {
    fontSize: "1rem",
    fontWeight: "bolder"
  }
});

function ExperienceIllustration() {
  const classes = useStyles();

  useEffect(() => {
    carousel();
  }, []);
  const carousel = () => {
    const carousel = document.querySelector(".carousel");
    let cellCount = 9;
    let selectedIndex = 0;

    function rotateCarousel() {
      let angle = (selectedIndex / cellCount) * -360;
      carousel.style.transform = "translateZ(-288px) rotateY(" + angle + "deg)";
    }

    let prevButton = document.querySelector(".previous-button");
    prevButton.addEventListener("click", function() {
      selectedIndex--;
      rotateCarousel();
    });

    let nextButton = document.querySelector(".next-button");
    nextButton.addEventListener("click", function() {
      selectedIndex++;
      rotateCarousel();
    });
  };
  return (
    <div className="experience__illustration">
      <Typography className={classes.title} variant="body2">
        Few of the Tools and Technologies I used
      </Typography>
      <div className="toolAndTechnologies">
        <ToolsAndTech />
      </div>
    </div>
  );
}

export default ExperienceIllustration;
