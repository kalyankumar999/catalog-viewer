import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import useStyles from "./styles";
import ImgDetails from "../../Components/ImgDetails";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CarouselImage from "../../Components/ImgCarousel";
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import {
  Orange,
  Mango,
  House,
  Strawberry,
  Kiwi,
  PineApple,
  Grapes,
  Cherry,
} from "../../Asset/Images/images";

const HomePage: React.FC<any> = () => {
  const initialImg = [
    {
      id: 1,
      title: "Kiwi",
      image: Kiwi,
      description:
        "Kiwi, also known as kiwifruit or Chinese gooseberry, is a small fruit with a fuzzy brown exterior and a vibrant green interior. It is scientifically known as Actinidia deliciosa and belongs to the Actinidiaceae family. Kiwi is native to China but is now cultivated in various parts of the world.",
    },
    {
      id: 2,
      title: "PineApple",
      image: PineApple,
      description:
        "Pineapple is a tropical fruit known for its sweet and tangy flavor and prickly, spiky exterior. It belongs to the Bromeliaceae family and is scientifically known as Ananas comosus. Pineapples are native to South America but are now cultivated in many tropical regions around the world",
    },
    {
      id: 3,
      title: "Mango",
      image: Mango,
      description:
        "Mango is a tropical fruit known for its sweet and juicy flesh and distinct flavor. It belongs to the Anacardiaceae family and is scientifically known as Mangifera indica. Mangoes are native to South Asia but are now cultivated in many tropical and subtropical regions worldwide.",
    },
    {
      id: 4,
      title: "orange",
      image: Orange,
      description:
        " Orange is a citrus fruit that is known for its bright orange color and tangy flavor. It belongs to the Rutaceae family and is scientifically known as Citrus sinensis. Oranges are one of the most popular fruits worldwide and are consumed in various forms, including fresh, juiced, or used in culinary preparations.Here are some key points about oranges:Health Benefits: Oranges are packed with essential nutrients, including vitamin C, dietary fiber, and antioxidants. They are known for their immune-boosting properties, promoting heart health, and aiding digestion.",
    },
    {
      id: 5,
      title: "Straberry",
      image: Strawberry,
      description:
        "Strawberries are small, red berries with a sweet and slightly tart flavor.They are rich in vitamin C, dietary fiber, and antioxidants.Strawberries are low in calories and a good source of folate, potassium, and manganese.They can be eaten fresh, added to salads, used in desserts like cakes and pies, or blended into smoothies.",
    },
    {
      id: 6,
      title: "Cherry",
      image: Cherry,
      description:
        "Cherries are small, round fruits with a sweet and juicy taste.They come in various colors, including red, yellow, and black.Cherries are packed with antioxidants, vitamin C, and dietary fiber.They have anti-inflammatory properties and may provide benefits for sleep quality and exercise recovery.Cherries can be enjoyed fresh, used in baking, or added to sauces and preserves.",
    },
    {
      id: 7,
      title: "Grapes",
      image: Grapes,
      description:
        "Grapes are small, juicy fruits that grow in clusters on vines. They come in various colors, including green, red, and purple. Grapes belong to the Vitaceae family and are scientifically known as Vitis vinifera.",
    },
    {
      id: 8,
      title: "House",
      image: House,
      description:
        "Bananas are elongated fruits with a creamy texture and a mild, sweet flavor.They are an excellent source of potassium, vitamin C, vitamin B6, and dietary fiber.Bananas are a popular energy-boosting snack, especially among athletes, due to their natural sugars and carbohydrates.They can be eaten as is, used in baking recipes, blended into smoothies, or sliced over cereal or yogurt.",
    },
  ];

  const { play, btn } = useStyles();
  const [selectedItem, setSelectedItem] = useState<any>(initialImg[0]);
  const [enableAutoPlay, setEnableAutoPlay] = useState<any>(false);
  const handleImgClick = (item: any) => {
    
    setSelectedItem(item);
  };
  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <ImgDetails selectedItem={selectedItem} />
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={7}>
          <CarouselImage
            initialImg={initialImg}
            handleImgClick={handleImgClick}
            enableAutoPlay={enableAutoPlay}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4} className={play}>
          <button
            onClick={() => setEnableAutoPlay(!enableAutoPlay)}
            className={btn}
          >
            {
            enableAutoPlay ?
            <PauseCircleIcon style={{ fontSize: "3.5rem", color: "skyblue" }} />
            :
            <PlayCircleIcon style={{ fontSize: "3.5rem", color: "skyblue" }} />
}
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
