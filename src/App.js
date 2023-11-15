import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FacebookMessanger from "./components/FacebookMessanger";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
     {/* <FacebookMessanger /> */}
      <Footer />
    </BrowserRouter>
  );
}
