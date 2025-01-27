import PropTypes from "prop-types";
import React from "react";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
import { LocaleContext } from "../context/LocaleContext";
import content from "../utils/content";

function LoginInput({ login }) {
  const { locale } = React.useContext(LocaleContext);
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Email dan password tidak boleh kosong!");
      return;
    }
    login({ email, password });
  };

  return (
    <div className="form-container">
      <p className="title">Login</p>
      <form onSubmit={onSubmitHandler} className="form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={content.login[locale].emailPlaceholder}
            value={email}
            onChange={handleEmailChange}
            aria-label="Email input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder={content.login[locale].passwordPlaceholder}
            value={password}
            onChange={handlePasswordChange}
            aria-label="Password input"
            required
          />
        </div>
        <button type="submit" className="sign">
          Sign in
        </button>
      </form>
      <p className="signup">
        {content.login[locale].registerLink}
        <Link to="/register"> {content.login[locale].link}</Link>
      </p>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
