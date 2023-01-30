import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Teacher from "./component/Teacher";
import Student from "./component/Student";
import Safi from "./component/Safi";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path="/Safi" element={<Safi />} />
      </Routes>
    </div>
  );
}

export default App;
