import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactStars from "react-stars";
import { ReactComponent as Car } from "./car.svg";
import { ReactComponent as Medal } from "./medal.svg";
import { ReactComponent as Route } from "./route.svg";

const Rating = ({ value }) => {
  const history = useHistory();
  const [review, setReview] = useState({
    greatService: false,
    greatCar: false,
    fastRoute: false,
    rating: 0,
  });
  const [profile, setProfile] = useState();

  const handleReview = (name) => {
    setReview((state) => ({ ...review, [name]: !state[name] }));
  };

  useEffect(() => {
    const getDetails = async () => {
      const { data } = await axios.get(
        `https://84pd4xghga.execute-api.eu-west-1.amazonaws.com/dev/viewDriverProfile?email=${value}`
      );

      setProfile({
        name: data?.driver?.fullName,
        image: data?.driver?.driverDocs?.driverPic,
      });
    };
    getDetails();
  }, [value]);

  const handleSubmit = async (name) => {
    try {
      const { data } = await axios.patch(
        `https://84pd4xghga.execute-api.eu-west-1.amazonaws.com/dev/giveRatings`,
        {
          email: value,
          reviews: review,
        }
      );
      history.push("/success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Feedback">
      <div className="details">
        <img src={profile?.image} alt="" />
        <span className="name">{profile?.name}</span>
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
