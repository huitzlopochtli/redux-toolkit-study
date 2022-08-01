import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Counter from "./components/Counter/Counter";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
