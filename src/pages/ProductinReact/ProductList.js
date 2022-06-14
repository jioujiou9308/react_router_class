import React from "react";
import { useEffect, useState } from "react";
import { products } from "../../data/product-3c";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const [productsInList, setProductsInList] = useState([]);

  //didMount
  useEffect(() => {
    setProductsInList(products);
  }, []);

  return (
    <>
      <h1>產品列表</h1>
      <ul>
        {productsInList.map((v, i) => {
          return (
            <li key={v.id}>
              {/* 後面的v.id得到的每個品項細節的路徑
            要迴路由列表去設定:id */}
              <Link to={"/product-detail/" + v.id}>
                {v.name} / {v.price}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductList;
