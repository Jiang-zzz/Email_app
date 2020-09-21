import React from "react";
import { ReactTinyLink } from "react-tiny-link";
const Landing = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Emaily!</h1>
      <div>collect feedback from your users</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:"100px"
        }}
      >
        <ReactTinyLink
          cardSize="large"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="https://github.com/Jiang-zzz"
        />
      </div>
    </div>
  );
};

export default Landing;
