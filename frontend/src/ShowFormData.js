import React from "react";

const ShowFormData = ({ name, email, password }) => {
  console.log({ name, email, password });
  return (
    <div>
      <label>Name: </label>
      {name}
      <label>Email: </label>
      {email}
      <label>Password: </label>
      {password}
    </div>
  );
};

export default ShowFormData;
