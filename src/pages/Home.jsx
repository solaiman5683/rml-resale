import React, { Component } from "react";
import FindCar from "../partials/FindCar";
import Sidebar from "../partials/Sidebar";
import Slider from "../partials/Slider";

export default class Home extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <main className="main">
        <Slider />
        <FindCar />
        </main>
      </>
    );
  }
}
