import React from "react";

const Footer = ({ children, name, age, location }) => {
  console.log(children);
  return (
    <div>
      <h1>Footer</h1>
      <h1>
        {children}의 이름은 {name[0]},나이는 {age[0]} 이며, 사는곳은{" "}
        {location[1]}이다
      </h1>
    </div>
  );
};

export default Footer;
