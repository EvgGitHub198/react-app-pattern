import { Routes, Route } from "react-router";
import { About, Home, NotFound } from "@/pages";

const RoutesList = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesList;