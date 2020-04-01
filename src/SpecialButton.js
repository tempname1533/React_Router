import React from "react";
import { withRouter } from "react-router-dom";

const SpecialButton = ({ history }) => {
  return (
    <button
      onClick={() => {
        history.push("post/special");
      }}
    >
      Special Button
    </button>
  );
};

export default withRouter(SpecialButton);
