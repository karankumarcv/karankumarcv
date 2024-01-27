import React from "react";
import ProfileImg from "../assets/profilePhoto.webp";
function ProfileCard() {
  return (
    <div className="image-container">
      <img src={ProfileImg} alt="Profile" />
    </div>
  );
}

export default ProfileCard;
