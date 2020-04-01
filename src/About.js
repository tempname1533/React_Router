import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const postId = 5;

  return (
    <div>
      <div>about</div>
      <Link to={`/post/${postId}`}>Go To post 5 </Link>
    </div>
  );
};

export default About;
