import axios from "axios";
import React, { useState } from "react";
import ReactStars from "react-stars";
import { ReactComponent as Car } from "./car.svg";
import { ReactComponent as Medal } from "./medal.svg";
import { ReactComponent as Route } from "./route.svg";

const Rating = ({}) => {
  const [review, setReview] = useState({
    greatService: false,
    greatCar: false,
    fastRoute: false,
    rating: 0,
  });

  const handleReview = (name) => {
    setReview((state) => ({ ...review, [name]: !state[name] }));
  };

  const handleSubmit = async (name) => {
    const { data } = await axios.patch(
      `https://84pd4xghga.execute-api.eu-west-1.amazonaws.com/dev/giveRatings`,
      {
        email: "vnnair39@gmail.com",
        reviews: review,
      }
    );
  };

  console.log(review);

  return (
    <div className="Feedback">
      <div className="details">
        <img
          src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d24fb0834a5c400084adc63%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D177%26cropX2%3D3586%26cropY1%3D354%26cropY2%3D3767"
          alt=""
        />
        <span className="name">{"Vinay Nair"}</span>
        <ReactStars
          count={5}
          size={60}
          color2={"#FFBB00"}
          value={review.rating}
          onChange={(value) => setReview({ ...review, rating: value })}
        />
      </div>
      <div className="main">
        <span className="title">Want to give a compliment?</span>
        <div className="compliments">
          <button
            name="greatService"
            className={review.greatService ? "compliment active" : "compliment"}
            onClick={() => handleReview("greatService")}
          >
            <Medal />
            <span>Great Service</span>
          </button>
          <button
            name="greatCar"
            className={review.greatCar ? "compliment active" : "compliment"}
            onClick={() => handleReview("greatCar")}
          >
            <Car />
            <span>Great Car</span>
          </button>
          <button
            name="fastRoute"
            className={review.fastRoute ? "compliment active" : "compliment"}
            onClick={() => handleReview("fastRoute")}
          >
            <Route />
            <span>Fast Route</span>
          </button>
        </div>
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default Rating;
