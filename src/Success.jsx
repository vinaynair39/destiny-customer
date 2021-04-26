import React from "react";
import Lottie from "lottie-react-web";
import animation from "./animation.json";
import { Link } from "react-router-dom";

const Success = ({}) => {
  return (
    <div className="Success">
      <h1>Thanks for you review!</h1>
      <Link to="/" className="button">
        Head Home
      </Link>
      <Lottie
        options={{
          animationData: animation,
        }}
      />
    </div>
  );
};
export default Success;
