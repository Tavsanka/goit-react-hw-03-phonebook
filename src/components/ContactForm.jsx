import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ContactForm.scss";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form className={"form"} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        required
        autoComplete="name"
      />
      <label htmlFor="number">Phone number</label>
      <input
        id="number"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="Phone number"
        required
        autoComplete="tel"
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
