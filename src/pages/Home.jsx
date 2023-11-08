import React, { Component } from "react";
import AboutArea from "../partials/AboutArea";
import FindCar from "../partials/FindCar";
import Sidebar from "../partials/Sidebar";
import Slider from "../partials/Slider";
import CountArea from "../partials/CountArea";
import CarArea from "../partials/CarArea";
import OurDeal from "../partials/OurDeal.jsx";
import Testimonials from "../partials/Testimonials.jsx";

export default class Home extends Component {
  render() {
    return (
      <>
        <Sidebar />
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
