import axios from "axios";
const URL = "http://localhost:3000/mataPraktikum";
const access_token = localStorage.getItem("access_token");
import Swal from "sweetalert2";

const instanceAxios = axios.create({
  baseURL: URL,
  headers: {
    access_token: `${access_token}`,
    "Content-Type": "application/json",
  },
});

const getMataPraktikum = async (cb) => {
  try {
    let matprak = await instanceAxios({
      method: "GET",
      url: URL + "/data",
    });
    cb(matprak.data);
  } catch (e) {
    console.log(e);
  }
};

const addMataPraktikum = async (form) => {
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

const deleteMataPraktikum = async (id1, id2) => {
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
          url: URL + "/delete/" + id1 + "/" + id2,
        });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });

    console.log(remove);
  } catch (e) {
    console.log(e);
  }
};

export { getMataPraktikum, addMataPraktikum, deleteMataPraktikum };
