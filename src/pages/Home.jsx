import React, { Component } from "react";
import AboutArea from "../partials/AboutArea";
import CarArea from "../partials/CarArea";
import CountArea from "../partials/CountArea";
import FindCar from "../partials/FindCar";
import OurDeal from "../partials/OurDeal.jsx";
import Slider from "../partials/Slider";
import Testimonials from "../partials/Testimonials.jsx";

export default class Home extends Component {
  render() {
    return (
      <>
        <main className="main">
        <Slider />
        <FindCar />
        <AboutArea />
        <CountArea />
        <CarArea />
        <OurDeal />
        <Testimonials />
        </main>
      </>
    );
  }
}
