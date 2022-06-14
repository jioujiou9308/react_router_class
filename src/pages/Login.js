import React from "react";
//將登入後的畫面導入我們指定的葉面
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const { auth, setAuth } = props;

  const history = useHistory();

  return (
    <>
      <h1>會員登入</h1>
      <p>{auth ? " 現在是登入狀態" : "未登入"}</p>
      <button
        onClick={() => {
          //解決一部執行的方法
          //最好不要將!auth直接放入setAuth()中
          const newAuth = !auth;
          setAuth(newAuth);
          const msg = newAuth ? "歡迎" : "期待下次再見";
          alert(msg);

          //導向關於我們
          //當我們登入後直接導入我們指定的頁面
          // history.push("/about");
        }}
      >
        {auth ? "登出" : "登入"}
      </button>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        返回上一頁
      </button>
    </>
  );
};

export default Login;
