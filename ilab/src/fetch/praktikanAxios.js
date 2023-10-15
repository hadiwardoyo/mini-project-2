import axios from 'axios'

const URL = 'http://localhost:3000/praktikan'

const access_token = localStorage.getItem('access_token')
console.log(access_token)

const instanceAxios = axios.create({
    baseURL: URL,
    headers: {
        'access_token': `${access_token}`,
        'Content-Type': 'application/json'
    }
})

const getPraktikans = async (cb) => {
    try {
        let praktikans = await instanceAxios({
            method: 'GET',
            url: URL + '/data'
        })
        console.log(praktikans.data)
        cb(praktikans.data)
    } catch (e) {
        console.log(e.response)
    }
}

const addPraktikan = async (form) => {
    try {
        let praktikan = await instanceAxios({
            method: 'POST',
            url: URL + '/add',
            data: form
        })

        console.log(praktikan.data)
    } catch (e) {
        console.log(e)
    }
}

const editPraktikan = async (id, form) => {
    try {
        let updated = await instanceAxios({
            method: 'PUT',
            url: URL + '/update/' + id,
            data: form
        })

        console.log(updated)
    } catch (e) {
        console.log(e)
    }
}

const deletePraktikan = async (id) => {
    try {
        let remove = await instanceAxios({
            method: 'DELETE',
            url: URL + '/delete/' + id,
        })

        console.log(remove)
    } catch (e) {
        console.log(e)
    }
}

const findById = async (cb) => {
    try {
        let praktikan = await instanceAxios({
            method: 'GET',
            url: URL + '/details',
        })
        cb(praktikan.data)
    } catch (e) {
        console.log(e)
    }
}

export {
    getPraktikans,
    addPraktikan,
    editPraktikan,
    deletePraktikan,
    findById
}