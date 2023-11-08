import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";

export default class Home extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <main className="main">
        <Slider />
        </main>
      </>
    );
  }
}
