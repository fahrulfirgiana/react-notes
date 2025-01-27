import PropTypes from "prop-types";
import React from "react";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
import { LocaleContext } from "../context/LocaleContext";
import content from "../utils/content";

function RegisterInput({ register }) {
  const { locale } = React.useContext(LocaleContext);
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (name.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
      alert("Semua kolom wajib diisi!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords tidak cocok!");
      return;
    }
    register({ name, email, password });
  };

  return (
    <div className="form-container">
      <p className="title">{content.register[locale].header}</p>
      <form onSubmit={onSubmitHandler} className="form">
        <div className="input-group">
          <label htmlFor="name">{content.register[locale].labels.name}</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={content.register[locale].name}
            value={name}
            onChange={handleNameChange}
            aria-label="Nama input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">{content.register[locale].labels.email}</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={content.register[locale].email}
            value={email}
            onChange={handleEmailChange}
            aria-label="Email input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">{content.register[locale].labels.password}</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder={content.register[locale].password}
            value={password}
            onChange={handlePasswordChange}
            aria-label="Password input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">{content.register[locale].labels.confirmPassword}</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder={content.register[locale].confirmPassword}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            aria-label="Konfirmasi password input"
            required
          />
        </div>
        <button type="submit" className="sign">
          Register
        </button>
      </form>
      <p className="signup">
      {content.register[locale].registerLink}
        <Link to="/"> {content.register[locale].link}</Link>
      </p>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
