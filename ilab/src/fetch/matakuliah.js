import axios from "axios";

const URL = "http://localhost:3000/mataKuliah";

const access_token = localStorage.getItem("access_token");

const instanceAxios = axios.create({
  baseURL: URL,
  headers: {
    access_token: `${access_token}`,
    "Content-Type": "application/json",
  },
});

const getMatkuls = async (cb) => {
  try {
    let matkuls = await axios({
      method: "GET",
      url: URL,
    });
    cb(matkuls.data);
  } catch (e) {
    console.log(e);
  }
};

const addMatkul = async (form) => {
  try {
    let matkul = await axios({
      method: "POST",
      url: URL,
      data: form,
    });

    console.log(matkul);
  } catch (e) {
    console.log(e);
  }
};

const editMatkul = async (id, form) => {
  try {
    let updated = await axios({
      method: "PUT",
      url: URL + "/update/" + id,
      data: form,
    });

    console.log(updated);
  } catch (e) {
    console.log(e);
  }
};

const deleteMatkul = async (id) => {
  try {
    let remove = await axios({
      method: "DELETE",
      url: URL + "/delete/" + id,
    });

    console.log(remove);
  } catch (e) {
    console.log(e);
  }
};

export { getMatkuls, editMatkul, addMatkul, deleteMatkul };
