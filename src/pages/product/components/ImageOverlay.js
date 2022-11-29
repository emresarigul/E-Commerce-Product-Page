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
import iconNextOrange from "../../../images/icon-next-orange.svg";
import iconPrev from "../../../images/icon-previous.svg";
import iconPrevOrange from "../../../images/icon-previous-orange.svg";
import { CartContext } from "../../../context/CartContext";
import { ProductContext } from "../Context";

const ImageOverlay = () => {
  const { setImageOverlay } = useContext(ProductContext);

  const { overlayColor, setOverlayColor } = useContext(CartContext);
  const [overlayImage, setOverlayImage] = useState(0);
  const imageArr = [image1, image2, image3, image4];
  const thumbImageArr = [thumbImage1, thumbImage2, thumbImage3, thumbImage4];

  const overlayImageHandler = () => {
    setImageOverlay(false);
    setOverlayColor(!overlayColor);
  };

  const nextImageHandler = () => {
    setOverlayImage(overlayImage + 1);
    if (overlayImage >= imageArr.length - 1) {
      setOverlayImage(0);
    }
  };
  const prevImageHandler = () => {
    setOverlayImage(overlayImage - 1);
    if (overlayImage <= 0) {
      setOverlayImage(imageArr.length - 1);
    }
  };

  return (
    <div className="overlay-image-container">
      <div className="prev-btn" onClick={prevImageHandler}>
        <img className="prev-black" src={iconPrev} alt="" />
        <img className="prev-orange" src={iconPrevOrange} alt="" />
      </div>
      <div className="next-btn" onClick={nextImageHandler}>
        <img className="next-black" src={iconNext} alt="" />
        <img className="next-orange" src={iconNextOrange} alt="" />
      </div>
      <div className="overlay-close-btn" onClick={overlayImageHandler}></div>
      <div className="main-overlay-image">
        <img src={imageArr[overlayImage]} alt="" />
      </div>
      <div className="thumb-overlay-images">
        {thumbImageArr.map((image, index) => {
          return (
            <div
              className={`box-overlay ${
                overlayImage === index ? "active" : "not-active"
              }`}
              key={index}
              onClick={() => setOverlayImage(index)}
            >
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageOverlay;
