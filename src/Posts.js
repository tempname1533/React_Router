import React from "react";

const Posts = ({ match }) => {
  //   useEffect(() => {
  //     fetch(`api.example.com/${match.params.id}`);
  //   }, [match.params.id]);
  return <div>rendering post {match.params.id}</div>;
};

export default Posts;
