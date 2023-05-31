import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  ImgCarousel: {
    padding: "10px",
    position: "relative",
    overflow: "hidden",
    gap:'20px'
  },

  ImgContainer: {
    display: "flex",
    gap: "10px",
    overflowX:'hidden',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer',
    scrollBehavior: "smooth",
    padding:'20px'
  },

  Pic: {
    height: "10vw",
    width: "15vw",
    borderRadius: "10px",
  },

  preBtn: {
    border:'none',
    height:'100%',
    width:'50px',
    position:'absolute',
    backgroundColor:'white',
    cursor:'pointer',
  },
  nxtBtn: {
    border:'none',
    height:'100%',
    width:'50px',
    right:'0px',
    position:'absolute',
    cursor:'pointer',
    backgroundColor:'white'
  },

  carouselCustomStyle: {
    display: "flex", alignItems: "center", justifyContent: "center"
  },
});

export default useStyles;
