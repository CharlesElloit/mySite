import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// import reactImg from "../../images/react.png";
// import reactNativeImg from "../../images/react-native.png";
// import gitImg from "../../images/git.png";
// import reduxImg from "../../images/redux.png";
// import JavaScriptImg from "../../images/js.png";
// import materailUIImg from "../../images/material-ui.png";
// import nodeJsImg from "../../images/Nodejs.jpeg";
// import typescriptImg from "../../images/typescript.png";
// import herokuImg from "../../images/heroku.png";

export default function ToolsAndTech() {
  return (
    <>
      <div className="scene">
        <div className="carousel">
          <div className="carousel__cell">
            {/* <img src={reactImg} alt="reactimage" /> */}
            <span>React</span>
          </div>
          <div className="carousel__cell">
            {/* <img src={reduxImg} alt="reactimage" /> */}
            <span>Redux</span>
          </div>
          <div className="carousel__cell">
            {/* <img src={reactNativeImg} alt="react-nativeImage" /> */}
            <span>React Native</span>
          </div>
          <div className="carousel__cell">
            {/* <img src={gitImg} alt="gitimage" /> */}
            <span>git</span>
          </div>
          <div className="carousel__cell">
            {/* <img src={JavaScriptImg} alt="javascriptImage" /> */}
            <span>JavaScript</span>
          </div>
          <div className="carousel__cell">
            {/* <img src={materailUIImg} alt="material-ui-img" /> */}
            <span>Material-Ui</span>
          </div>
          <div className="carousel__cell">
            {/* <img src={nodeJsImg} alt="NodeImage" /> */}
            <span>Nodejs</span>
          </div>
          <div className="carousel__cell">
            {/* <img src={typescriptImg} alt="typescriptImage" /> */}
            <span>Jest</span>
          </div>
          <div className="carousel__cell">
            {/* <img src={herokuImg} alt="herokuImage" /> */}
            <span>Heroku cloud</span>
          </div>
        </div>
      </div>
      <p className="action-buttons" style={{ textAlign: "center" }}>
        <button className="previous-button">
          <ArrowForwardIosIcon />
        </button>
        <button className="next-button">
          <ArrowBackIosIcon />
        </button>
      </p>
    </>
  );
}
