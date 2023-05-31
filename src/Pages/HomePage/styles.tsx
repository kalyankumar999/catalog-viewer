import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  play: {
    position: "relative",
  },
  btn: {
    background: "none",
    cursor: "pointer",
    border: "none",
    margin: "0",
    top: "50%",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
});

export default useStyles;
