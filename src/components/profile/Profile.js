import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
  });
  return (
    <div>
      <h1>This is Profile</h1>
    </div>
  );
}

export default Profile;
