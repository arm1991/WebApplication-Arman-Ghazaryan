import "./OpenClient.scss";
import React from "react";

const OpenClient = ({ user, idx, changeDetails }) => {
  return (
    <div
      className="users-opened-user"
      onClick={() => {
        changeDetails(idx);
      }}
    >
      <div className="users-opened-user-image">
        <img src={user.picture.medium} alt="users-opened-user-img" />
      </div>
      <div className="users-opened-user-info">
        <h1 className="users-opened-user-name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
        <p className="users-opened-user-phone">{user.phone}</p>
        <p className="users-opened-user-email">{user.email}</p>
        <p>{user.gender}</p>
        <div className="users-opened-user-location">
          <h4>Location</h4>
          <p>{user.location.country}</p>
          <p>{user.location.city}</p>
        </div>
      </div>
    </div>
  );
};

export default OpenClient;
