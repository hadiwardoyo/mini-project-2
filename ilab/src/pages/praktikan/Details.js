import React, { useState, useEffect } from 'react'
import { editPraktikan, getDataMatkul } from '../../fetch/praktikanAxios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const Details = () => {

    const [form, setForm] = useState({})

    const navigate = useNavigate()
    const params = useParams()

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => {
            return { ...prev, [name]: value }
        })
    }

    const getInfo = () => {
        // const { id } = params
        getDataMatkul(+params.id, result => {
            setForm({
                nim: result.nim,
                nama: result.nama,
                jurusan: result.fakultas,
                fakultas: result.fakultas,
                tahun_masuk: result.tahun_masuk,
                status: result.status,
                role: result.role,
                matkuls: result.matkuls
            })

        })
    }

    useEffect(() => {
        getInfo()
    }, [])

    const handleSubmit = () => {
        editPraktikan(+params.id, form)
        navigate('/praktikan')
    }

    return (
        <>
            <div className=''>
                <div className='p-3 col-7 mx-auto'>
                    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <div className='row'>
                            <div className='col-3'>
                                <h4>Details</h4>
                            </div>
                            <div className='col-3 ms-auto'>
                                <Link to='' className='btn btn-sm btn-outline-info' >Tambahkan matkul</Link>
                            </div>
                        </div>
                        <hr className='' />
                        <div className='row'>
                            <div className='hstack gap-3'>
                                <div className='p-2'>
                                    <h6 >Nama Lengkap:</h6>
                                </div>
                                <div className='p-2'>
                                    <p >{form.nama}</p>
                                </div>
                            </div>

                            <div className='hstack gap-3'>
                                <div className='p-2'>
                                    <h6 >Jurusan:</h6>
                                </div>
                                <div className='p-2'>
                                    <p >{form.jurusan}</p>
                                </div>
                            </div>

                            <div className='hstack gap-3'>
                                <div className='p-2'>
                                    <h6 >Fakultas:</h6>
                                </div>
                                <div className='p-2'>
                                    <p >{form.fakultas}</p>
                                </div>
                            </div>

                            <div className='hstack gap-3'>
                                <div className='p-2'>
                                    <h6 >Tahun Masuk:</h6>
                                </div>
                                <div className='p-2'>
                                    <p >{form.tahun_masuk}</p>
                                </div>
                            </div>

                            <div className='hstack gap-3'>
                                <div className='p-2'>
                                    <h6 >Status:</h6>
                                </div>
                                <div className='p-2'>
                                    <p >{form.status}</p>
                                </div>
                            </div>

                            <div className='hstack gap-3'>
                                <div className='p-2'>
                                    <h6 >Mata kuliah:</h6>
                                </div>
                                <div className='p-2'>
                                    <p >{form.matkuls > 0 ?
                                        form.matkuls :
                                        <p>Belum ada matkul</p>
                                    }</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details