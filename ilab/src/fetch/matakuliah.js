import axios from "axios";
import Swal from "sweetalert2";

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
    let matkuls = await instanceAxios({
      method: "GET",
      url: URL + "/data",
    });
    cb(matkuls.data);
  } catch (e) {
    console.log(e);
  }
};

const addMatkul = async (form) => {
  try {
    let matkul = await instanceAxios({
      method: "POST",
      url: URL + "/add",
      data: form,
    });

    console.log(matkul);
  } catch (e) {
    console.log(e);
  }
};

const editMatkul = async (id, form) => {
  try {
    let updated = await instanceAxios({
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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let remove = await instanceAxios({
          method: "DELETE",
          url: URL + "/delete/" + id,
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  } catch (e) {
    console.log(e);
  }
};

const findById = async (id, cb) => {
  try {
    let matkul = await instanceAxios({
      method: "GET",
      url: URL + "/details/" + id,
    });
    cb(matkul.data);
    console.log();
  } catch (e) {
    console.log(e.response);
  }
};

export { getMatkuls, editMatkul, addMatkul, deleteMatkul, findById };
