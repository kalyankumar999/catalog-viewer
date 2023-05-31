import React from "react";
import Grid from "@mui/material/Grid";

const ImgDetails: React.FC<any> = (props) => {
  const { selectedItem } = props;

  return (
    <>
      <Grid container xs={12} style={{ padding: "20px" }}>
        <Grid item xs={12} md={6} lg={7}>
          <div>
            <img
              src={selectedItem?.image}
              alt="nothing there"
              style={{ borderRadius: "20px", height: "30vw", width: "100%" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={1} lg={1}>
          <div></div>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <h1>{selectedItem?.title}</h1>
          <p style={{ fontSize: "20px" }}>{selectedItem?.description}</p>
        </Grid>
      </Grid>
    </>
  );
};

export default ImgDetails;
