import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Counter from "./components/Counter/Counter";
import Home from "./components/Home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
}
