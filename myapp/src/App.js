import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/NavBar";
import Education from "./component/Education";
import Port from "./Port/Port";

function App() {
  return (
    <Router>
      <Navbar />
      <Education />
      <Routes>
        <Route path="/port" element={<Port />} />
        <Route path="/port" element={<Navbar />} />
        <Route path="/port" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
