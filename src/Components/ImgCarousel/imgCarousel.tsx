import React, { useState ,useEffect} from "react";
import useStyles from "./style";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import Carousel from "react-material-ui-carousel";


const CarouselImage: React.FC<any> = (props) => {
  const {handleImgClick, initialImg, enableAutoPlay}=props;
  const {
    ImgCarousel,
    ImgContainer,
    Pic,
    preBtn,
    nxtBtn,
    carouselCustomStyle,
  } = useStyles();



  const itemsPerPage = 4; // Number of items to show per slide
  const totalSlides = Math.ceil(initialImg.length / itemsPerPage);
  const [activeSlide, setActiveSlide] = useState(0);
  const [Img, setImg] = useState(initialImg);


  let visibleImages:any[];
    useEffect(() => {
      if (enableAutoPlay) {
        const timer = setInterval(()=>{handleClick(); handleImgClick(visibleImages[Math.floor(Math.random() * 3)]) }, 3000); 
        return () => {
          clearInterval(timer); 
        };
      }
    }, [enableAutoPlay]);



  const handleClick = () => {
    setImg((prevImg:any) => {
      const updatedImg = [...prevImg];
      const newImage = updatedImg[updatedImg.length - 1]; // Get the last image
      updatedImg.unshift(newImage); // Add the last image to the front
      updatedImg.length = Math.min(updatedImg.length, 4); // Limit the array length to 4
      return updatedImg; // Update the image array
    });
  };

  const renderItems = () => {
    const startIdx = activeSlide * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
     visibleImages = Img.slice(startIdx, endIdx);

    return (
      <div className={ImgContainer}>
        {visibleImages.map((item:any, index:any) => (
          <div onClick={()=>handleImgClick(item)}>
          <img key={index} src={item.image} className={Pic} alt="" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={ImgCarousel}>
      <Carousel
        className={carouselCustomStyle}
        autoPlay={true}
        interval={3000}
        indicators={false}
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={false}
        navButtonsWrapperProps={{
          style: { bottom: "0", top: "unset" },
        }}
        NextIcon={<ArrowForwardIos onClick={handleClick} />}
        PrevIcon={<ArrowBackIos onClick={handleClick} />}
        index={activeSlide}
        onChange={(index: any) => setActiveSlide(index)}
      >
        {renderItems()}
      </Carousel>
    </div>
  );
};

export default CarouselImage;
