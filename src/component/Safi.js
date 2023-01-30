import React from "react";
import { Link } from "react-router-dom";
export default function Safi() {
  return (
    <div>
      <Link
        className="nav-item nav-link text-dark mt-5"
        to="https://safis-training.netlify.app/"
        target={"_blank"}
      >
        <p>Clickme</p>
        <h1>Safis Component</h1>
      </Link>
    </div>
  );
}
