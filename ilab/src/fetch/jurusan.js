import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/jurusan";

const access_token = localStorage.getItem("access_token");

const instanceAxios = axios.create({
  baseURL: URL,
  headers: {
    access_token: `${access_token}`,
    "Content-Type": "application/json",
  },
});

const getJurusan = async (cb) => {
  try {
    let jurusan = await instanceAxios({
      method: "GET",
      url: URL + "/data",
    });
    cb(jurusan.data);
  } catch (e) {
    console.log(e);
  }
};

export { getJurusan };
