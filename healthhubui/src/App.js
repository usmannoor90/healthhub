import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
