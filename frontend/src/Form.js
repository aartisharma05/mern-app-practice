import React from "react";
import { useState } from "react";
import ShowFormData from "./ShowFormData";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(formData);
  };

  return (
    <>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInput}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div>
        <ShowFormData
          name={formData.name}
          email={formData.email}
          password={formData.password}
        />
      </div>
    </>
  );
};

export default Form;
