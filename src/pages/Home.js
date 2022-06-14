import React from "react";

const Home = (props) => {
  const { auth } = props;
  return (
    <>
      <h1>Home</h1>
      <p>{auth ? " 現在是登入狀態" : "未登入"}</p>
    </>
  );
};

export default Home;
