import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUsers: string;
}

const Followers = () => {
  const { nameOfMyUsers } = useOutletContext<IFollowersContext>();

  return (
    <div>
      <h1>Here is {nameOfMyUsers} Followers</h1>
      <h3>{nameOfMyUsers}</h3>
    </div>
  );
};

export default Followers;
