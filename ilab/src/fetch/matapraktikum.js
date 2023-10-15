import axios from "axios";

const URL = 'http://localhost:3000/mataPraktikum'

const getMataPraktikum = async (cb) => {
    try {
        let matkuls = await axios({
            method: 'GET',
            url: URL
        })
        cb(matkuls.data)
    } catch (e) {
        console.log(e)
    }
}

const addMataPraktikum = async (form) => {
    try {
        let matkul = await axios({
            method: 'POST',
            url: URL,
            data: form
        })

        console.log(matkul)
    } catch (e) {
        console.log(e)
    }
}

const deleteMataPraktikum = async (id) => {
    try {
        let remove = await axios({
            method: 'DELETE',
            url: URL + '/delete/' + id,
        })

        console.log(remove)
    } catch (e) {
        console.log(e)
    }
}

export {
    getMatkuls,
    editMatkul,
    addMatkul,
    deleteMatkul
}