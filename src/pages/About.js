import React from "react";

const About = (props) => {
  const { auth } = props;
  return (
    <>
      <h1>About</h1>
      <p>{auth ? " 現在是登入狀態" : "未登入"}</p>
    </>
  );
};

export default About;
