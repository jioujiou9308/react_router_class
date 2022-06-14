import { useState } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import User from "./pages/User";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Product3C from "./pages/ProductCats/Product3C";
import ProductMobile from "./pages/ProductCats/ProductMobile";
import ProductDetail from "./pages/ProductinReact/ProductDetail";
import ProductList from "./pages/ProductinReact/ProductList";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <h2>使用a連結</h2>
      {/* 生命週期會回到didmount的狀態，會重新整理重新進入 */}
      <a href="/">首頁</a>
      <br />
      <a href="/about">關於我們</a>
      <br />
      <a href="/login">會員登入</a>
      <hr />
      <h2>使用Link元件</h2>
      <Link to="/">首頁</Link>
      <br />
      <Link to="/about">關於我們</Link>
      <br />
      <Link to="/login">會員登入</Link>
      <br />
      <Link to="/product/mobile">產品/手機</Link>
      <br />
      <Link to="/product/3c">產品/3c</Link>
      <br />
      <Link to="/product-list">產品/列表頁</Link>
      <br />
      {/* 這是沒有辦法呈現的 */}
      {/* <Link to="/product-detail/:product123456id">123</Link> */}

      <hr />
      {/* 如果沒有switch就會把任何有包含的網址都呈現出來 */}
      <Switch>
        <Route path="/login">
          <Login auth={auth} setAuth={setAuth} />
        </Route>
        <Route path="/product-detail/:product123456id">
          <ProductDetail />
        </Route>
        <Route path="/product-list">
          <ProductList />
        </Route>
        {/* product裡面有兩個子頁，但絕對沒有兩個router的寫法
            無法在product中在建立一個router連結product3c & productmobile */}
        <Route path="/product/mobile">
          <ProductMobile />
        </Route>
        <Route path="/product/3c">
          <Product3C />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        {/* 前面如果是相同路徑，較長的路徑往前放 */}
        <Route path="/about/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About auth={auth} />
        </Route>
        <Route exact path="/">
          <Home auth={auth} />
        </Route>
        {/* *=>代表沒有任何符合的網址時 */}
        <Route exact path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
