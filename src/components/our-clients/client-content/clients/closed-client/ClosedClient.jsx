import "./ClosedClient.scss";
import React from "react";

const ClosedClient = ({ user, idx, changeDetails }) => {
  return (
    <div
      className="users-closed-user"
      onClick={() => {
        changeDetails(idx);
      }}
    >
      <div className="users-closed-user-image">
        <img src={user.picture.medium} alt="users-closed-user-img" />
      </div>
      <div className="users-closed-user-info">
        <h1 className="users-closed-user-name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
        <p className="users-closed-user-email">{user.email}</p>
      </div>
    </div>
  );
};

export default ClosedClient;
