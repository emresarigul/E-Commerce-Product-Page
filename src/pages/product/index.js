import React, { useContext } from "react";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import ImageOverlay from "./components/ImageOverlay";
import PageLayout from "../shared/PageLayout";
import ProductContextProvider, { ProductContext } from "./Context";

const ProductDetailComponent = () => {
  const { imageOverlay } = useContext(ProductContext);

  return (
    <PageLayout>
      <ProductImage />
      <ProductInfo />
      {imageOverlay && <ImageOverlay />}
    </PageLayout>
  );
};
const ProductDetail = () => (
  <ProductContextProvider>
    <ProductDetailComponent />
  </ProductContextProvider>
);
export default ProductDetail;
