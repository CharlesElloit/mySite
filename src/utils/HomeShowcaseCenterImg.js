import makeStyles from "@material-ui/core/styles/makeStyles";
import profileImage from "../images/me.jpg";

const useStyles = makeStyles({
  profileImg: {
    margin: "3% 0 0 20%",
    position: "absolute"
  },
  img: {
    width: 200,
    height: 200,
    opacity: 0.4,
    borderRadius: "50%",
    objectFit: "cover"
  }
});

function HomeShowcaseCenterImg() {
  const classes = useStyles();

  return (
    <div className={classes.profileImg}>
      <img className={classes.img} src={profileImage} alt="profileimage" />
    </div>
  );
}

export default HomeShowcaseCenterImg;
