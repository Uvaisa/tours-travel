import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImagesGallery from "./imageGallery";
import { Container } from "reactstrap";
const ImageGalleryMasonry = () => {
  return (
    <div>
      <Container style={{ marginLeft: "80px", marginRight: "80px" }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}
        ></ResponsiveMasonry>
        <Masonry gutter="1rem">
          {ImagesGallery.map((item, index) => (
            <img
              className="masonry__img"
              src={item}
              key={index}
              alt=""
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
            />
          ))}
        </Masonry>
      </Container>
    </div>
  );
};

export default ImageGalleryMasonry;
