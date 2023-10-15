import React, { useState } from 'react'
import { addPraktikan } from '../../fetch/praktikanAxios'
import { useNavigate } from 'react-router-dom'

const CreatePraktikan = () => {

    const [form, setForm] = useState({
        nim: '',
        nama: '',
        jurusan: '',
        fakultas: '',
        tahun_masuk: '',
        status: 'aktif'
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = () => {
        addPraktikan(form)
        navigate('/praktikan')
    }

    return (
        <>
            <div className='p-3'>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Nim</label>
                    <input
                        onChange={handleChange}
                        type="text" className="form-control" name='nim' placeholder="Contoh: 123890334" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Nama</label>
                    <input
                        onChange={handleChange}
                        type="text" className="form-control" name='nama' placeholder="Masukan Nama Anda" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Jurusan</label>
                    <input type="text" className="form-control" name='jurusan' placeholder="Masukan Jurusan" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Fakultas</label>
                    <input
                        onChange={handleChange}
                        type="text" className="form-control" name='fakultas' placeholder="Fakultas" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Tahun Masuk</label>
                    <input
                        onChange={handleChange}
                        type="text" className="form-control" name='tahun_masuk' placeholder="Tahun Masuk" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Status</label>
                    <input
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

export default CreatePraktikan