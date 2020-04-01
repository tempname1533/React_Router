import React from "react";
import { Link } from "react-router-dom";
import SpecialButton from "./SpecialButton";

const Home = ({ history, location, match }) => {
  return (
    <div>
      <div>Home</div>
      <Link to="/about">Go to About</Link>
      <button
        onClick={() => {
          history.push("/about");
        }}
      >
        Click me to go to about
      </button>
      <SpecialButton />
    </div>
  );
};

export default Home;
