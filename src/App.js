import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
