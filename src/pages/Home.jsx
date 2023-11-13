import React, { Component } from "react";
import AboutArea from "../partials/AboutArea";
import CarArea from "../partials/CarArea";
import CountArea from "../partials/CountArea";
import FindCar from "../partials/FindCar";
import OurDeal from "../partials/OurDeal";
import Slider from "../partials/Slider";
import Testimonials from "../partials/Testimonials";

export default class Home extends Component {
  // constructor(props) {
  //   super(props);

  // }
  state = {
    scrollDirection: "down",
  };

  componentDidMount() {
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const currentScroll = window.scrollY;
    if (currentScroll > this.scrollPosition) {
      this.setState({ scrollDirection: "down" });
    } else {
      this.setState({ scrollDirection: "up" });
    }

    this.scrollPosition = currentScroll;
  }

  render() {
    const { scrollDirection } = this.state;

    return (
      <>
        <main className="main">
          <Slider />
          <FindCar />
          <AboutArea scrollDirection={scrollDirection} />
          <CountArea scrollDirection={scrollDirection} />
          <CarArea scrollDirection={scrollDirection} />
          <OurDeal />
          <Testimonials />
        </main>
      </>
    );
  }
}
