import React, { useState, useEffect } from 'react'
import { editPraktikan, findById } from '../../fetch/praktikanAxios'
import { useNavigate } from 'react-router-dom'

const EditPraktikan = () => {

    const [form, setForm] = useState({})

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => {
            return { ...prev, [name]: value }
        })
    }

    const getInfo = () => {
        findById(result => {
            setForm({
                nim: result.nim,
                nama: result.nama,
                jurusan: result.fakultas,
                fakultas: result.fakultas,
                tahun_masuk: result.tahun_masuk,
                status: result.status
            })
        })
    }

    useEffect(() => {
        getInfo()
    }, [])

    const handleSubmit = () => {
        editPraktikan(form)
        navigate('/praktikan')
    }

    return (
        <>
            <div className='p-3'>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Nim</label>
                    <input
                        value={form.nim}
                        onChange={handleChange}
                        type="text" className="form-control" name='nim' placeholder="Contoh: 123890334" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Nama</label>
                    <input
                        value={form.nama}
                        onChange={handleChange}
                        type="text" className="form-control" name='nama' placeholder="Masukan Nama Anda" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Jurusan</label>
                    <input
                        value={form.jurusan}
                        onChange={handleChange}
                        type="text" className="form-control" name='jurusan' placeholder="Masukan Jurusan" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Fakultas</label>
                    <input
                        value={form.fakultas}
                        onChange={handleChange}
                        type="text" className="form-control" name='fakultas' placeholder="Fakultas" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Tahun Masuk</label>
                    <input
                        value={form.tahun_masuk}
                        onChange={handleChange}
                        type="text" className="form-control" name='tahun_masuk' placeholder="Tahun Masuk" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Status</label>
                    <input
                        value={form.status}
                        onChange={handleChange}
                        type="text" className="form-control" name='status' placeholder="Status" />
                </div>
                <div>
                    <button
                        onClick={() => handleSubmit()}
                        className='btn btn-outline-primary'>Tambah Praktikan</button>
                </div>
            </div>
        </>
    )
}

export default EditPraktikan