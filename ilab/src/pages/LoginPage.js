import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = (props) => {
  const { loginCbHandler } = props;
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nama: "",
    nim: "",
  });

  const loginUser = async () => {
    try {
      let result = await axios({
        method: "POST",
        url: "http://localhost:3000/praktikan/login",
        data: form,
      });

      const access_token = result.data.access_token;
      localStorage.setItem("access_token", access_token);
      loginCbHandler(true);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Periksa Kembali nama dan NIM anda!",
      });
      console.log(err);
    }
  };

  const submitHandler = () => {
    loginUser();
  };
  return (
    <>
      <div className="login-page">
        <div className="login">
          <p class="msg">
            <img src="https://infotech.umm.ac.id/assets/img/logo.png" alt="" />
          </p>
          <div class="head">
            <h1 class="company">Selamat Datang</h1>
          </div>

          <div class="form-floating-lg mb-2">
            <label for="floatingInput">Nama</label>
            <input
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              type="text"
              class="form-control"
              placeholder="Nama Anda"
            />
          </div>
          <div class="form-floating-lg mb-2">
            <label for="floatingPassword">Password / NIM</label>

            <input
              onChange={(e) => setForm({ ...form, nim: e.target.value })}
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <button
            onClick={() => submitHandler()}
            className="btn btn-outline-light "
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
