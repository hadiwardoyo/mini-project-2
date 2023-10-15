import axios from "axios";

const URL = "http://localhost:3000/praktikan";
import Swal from "sweetalert2";

const access_token = localStorage.getItem("access_token");

const instanceAxios = axios.create({
  baseURL: URL,
  headers: {
    access_token: `${access_token}`,
    "Content-Type": "application/json",
  },
});

const getPraktikans = async (cb) => {
  try {
    let praktikans = await instanceAxios({
      method: "GET",
      url: URL + "/data",
    });

    cb(praktikans.data);
  } catch (e) {
    console.log(e);
  }
};

const addPraktikan = async (form) => {
  try {
    let praktikan = await instanceAxios({
      method: "POST",
      url: URL + "/add",
      data: form,
    });

    console.log(praktikan.data);
  } catch (e) {
    console.log(e);
  }
};

const editPraktikan = async (id, form) => {
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

const deletePraktikan = async (id) => {
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
    let praktikan = await instanceAxios({
      method: "GET",
      url: URL + "/details/" + id,
    });
    cb(praktikan.data);
    console.log();
  } catch (e) {
    console.log(e.response);
  }
};

const getDataMatkul = async (id, cb) => {
  try {
    let praktikan = await instanceAxios({
      method: 'GET',
      url: URL + '/' + id + '/' + 'matkul'

    })

    cb(praktikan.data.praktikans)
  } catch (e) {
    console.log(e.response)
  }
}

export {
  getPraktikans,
  addPraktikan,
  editPraktikan,
  deletePraktikan,
  findById,
  getDataMatkul
};
