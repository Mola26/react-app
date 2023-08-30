import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className=" col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Pretoria</h1>
      <ul>
        <li>Wednesday 23:00</li>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="Mostly Sunny"
          />
          6℃ | ℉
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 60%</li>
            <li>Wind 12km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
