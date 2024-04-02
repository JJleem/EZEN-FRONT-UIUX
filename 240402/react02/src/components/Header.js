import React from "react";

const Header = () => {
  const handleOnClick = () => {
    alert("hello,world");
  };

  return (
    <header>
      <h1>Header</h1>
      <button onClick={handleOnClick}>클릭하세요!</button>
    </header>
  );
};

export default Header;
