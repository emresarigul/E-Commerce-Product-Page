import React, { useState, useContext } from "react";
import "../../../style/ProductImage.css";
import image1 from "../../../images/image-product-1.jpg";
import image2 from "../../../images/image-product-2.jpg";
import image3 from "../../../images/image-product-3.jpg";
import image4 from "../../../images/image-product-4.jpg";
import thumbImage1 from "../../../images/image-product-1-thumbnail.jpg";
import thumbImage2 from "../../../images/image-product-2-thumbnail.jpg";
import thumbImage3 from "../../../images/image-product-3-thumbnail.jpg";
import thumbImage4 from "../../../images/image-product-4-thumbnail.jpg";
import iconNext from "../../../images/icon-next.svg";
import iconPrev from "../../../images/icon-previous.svg";
import { ProductContext } from "../Context";
import { CartContext } from "../../../context/CartContext";

const ProductImage = () => {
  const { setImageOverlay } = useContext(ProductContext);
  const { setOverlayColor } = useContext(CartContext);
  const [imageIndex, setImageIndex] = useState(0);
  const imageArr = [image1, image2, image3, image4];
  const thumbImageArr = [thumbImage1, thumbImage2, thumbImage3, thumbImage4];

  const imageOverlayHandler = () => {
    setImageOverlay(true);
    setOverlayColor(true);
  };

  const mobilePrevHandler = () => {
    setImageIndex(imageIndex - 1);
    if (imageIndex <= 0) {
      setImageIndex(imageArr.length - 1);
    }
  };

  const mobileNextHandler = () => {
    setImageIndex(imageIndex + 1);
    if (imageIndex >= imageArr.length - 1) {
      setImageIndex(0);
    }
  };

  return (
    <div className="image-container">
      <div className="desktop-images">
        <div className="main-image" onClick={imageOverlayHandler}>
          <img src={imageArr[imageIndex]} alt="" />
        </div>
        <div className="thumb-images">
          {thumbImageArr.map((image, index) => {
            return (
              <div
                className={`box ${
                  imageIndex === index ? "active" : "not-active"
                }`}
                key={index}
                onClick={() => setImageIndex(index)}
              >
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mobile-images">
        <div className="mobile-image-box">
          <img src={imageArr[imageIndex]} alt="" />
        </div>
        <div className="prev-btn" onClick={mobilePrevHandler}>
          <img src={iconPrev} alt="" />
        </div>
        <div className="next-btn" onClick={mobileNextHandler}>
          <img src={iconNext} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
