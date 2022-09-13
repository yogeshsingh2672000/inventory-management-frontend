import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
  });
  return (
    <div>
      <h1>This is About</h1>
    </div>
  );
}

export default About;
