import React, { useState, useEffect } from "react";
import { Box, Button, Card, CardMedia, Grid } from "@mui/material";

const ImageCarousel: React.FC<any> = (props) => {
  const { ShowImage, images, initialImg, enableAutoPlay } = props;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const displayedImages = [
    images[(currentImageIndex + images.length - 1) % images.length],
    images[currentImageIndex],
    images[(currentImageIndex + 1) % images.length],
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (enableAutoPlay) {
      timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        ShowImage(displayedImages[Math.floor(Math.random() * 3)]);
      }, 3000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [enableAutoPlay, images.length]);

  return (
    <Card>
      <Box display="flex" alignItems="center">
        <Button onClick={handlePrevious}>&lt;</Button>
        <div style={{ display: "flex" }}>
          {displayedImages.map((item, index) => (
            <CardMedia
              key={index}
              component="img"
              height="400"
              image={item.image}
              alt="Product Image"
              style={{
                flex: 1,
                width: "10%",
                height: "5%",
                borderRadius: "20px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={() => ShowImage(item)}
            />
          ))}
        </div>
        <Button onClick={handleNext}>&gt;</Button>
      </Box>
    </Card>
  );
};

export default ImageCarousel;
