import React from "react";

function PureCompnent({ f }) {
  console.log("pure compnent render");

  return (
    <>
      <h1>Pure Compnent</h1>
      <button onClick={f}></button>
    </>
  );
}

export default React.memo(PureCompnent);
