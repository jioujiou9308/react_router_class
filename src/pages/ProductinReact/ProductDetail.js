import React from "react";
import { useEffect, useState } from "react";
import { products } from "../../data/product-3c";

// 用這個鉤子可以抓到路由列表後面設定的product123456id
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const [productInDetail, setProductInDetail] = useState({
    id: "",
    picture: "",
    stock: 0,
    name: "",
    price: 0,
    tags: "",
  });

  //productid需事先在app.js的route中定義
  ////  <Route path="/product-detail/:product123456id">
  const { product123456id } = useParams();

  //didMount
  useEffect(() => {
    const item = products.find((v) => String(v.id) === product123456id);
    setProductInDetail(item);
  }, []);
  console.log(product123456id);
  return (
    <>
      <h1>產品詳細頁</h1>
      <p>商品名稱:{productInDetail.name}</p>

      <p>
        商品圖片:
        <img src={productInDetail.picture} alt="/" />
      </p>
      <p>商品價格:{productInDetail.price}</p>
    </>
  );
};

export default ProductDetail;
