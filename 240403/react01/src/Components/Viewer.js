import React from "react";

const Viewer = ({ number }) => {
  console.log("viewer component update!");

  return (
    // <div>
    //   {number % 2 === 0 ? <h3>짝수 입니다.</h3> : <h3>홀수 입니다.</h3>}
    // </div>
    <div>Viewer</div>
  );
};
export default Viewer;
