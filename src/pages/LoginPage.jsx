import React from "react";
import LoginInput from "../components/LoginInput";
import Navbar from "../components/Navbar";
import { login } from "../utils/api";

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    try {
      const { error, data } = await login({ email, password });
      if (error) {
        alert("Login gagal! Periksa email dan password Anda.");
      } else {
        loginSuccess(data);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Terjadi kesalahan pada server.");
    }
  }

  return (
    <section>
      <div>
        <Navbar
          title="NoteApp"
          showSearch={false}
          showLogout={false}
          showName={false}
        />
      </div>
      <div  className="login-page">
        <LoginInput login={onLogin} />
      </div>
    </section>
  );
}



export default LoginPage;
