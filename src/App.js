import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import FacebookMessanger from "./components/FacebookMessanger";
import ImageUpload from "./components/ImageUpload";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import TosterNotify from "./components/TosterNotify";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import SearchableProduct from "./pages/searchableProduct";
import Service from "./pages/Service";
import ChangePassword from "./pages/user/ChangePassword";
import Dashboard from "./pages/user/Dashboard";
import Profile from "./pages/user/Profile";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTopOnRouteChange /> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/imageUpload" element={<ImageUpload />} />
        <Route path="/searchable-product/:selectedModel/:selectedBrandId" element={<SearchableProduct />} />
        <Route path="/product/:product_id/:user_id?" element={<Product />} />
      </Routes>
      <TosterNotify />
      {/* <FacebookMessanger /> */}

      <Footer />
    </BrowserRouter>
  );
}
