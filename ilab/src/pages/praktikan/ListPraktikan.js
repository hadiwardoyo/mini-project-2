import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPraktikans, deletePraktikan } from '../../fetch/praktikanAxios'
import { Loading } from '../../components'

const ListPraktikan = () => {

    const [praktikans, setPraktikans] = useState([])

    useEffect(() => {
        getPraktikans(result => {
            setPraktikans(result)
        })
    }, [])

    const deleteHandler = id => {
        deletePraktikan(id)
        const newPraktikan = praktikans.filter(p => p.id !== id)
        setPraktikans(newPraktikan)
    }

    return (
        <>
            <div>
                <div className='col-9 mx-auto'>
                    <div className='w-100'>
                        <Link to='/praktikan/create' className='btn btn-sm btn-outline-primary mb-3'>Tambah Praktikan</Link>

                    </div>
                    <div className='w-100'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nama</th>
                                    <th>Jurusan</th>
                                    <th>Fakultas</th>
                                    <th>Tahun Masuk</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    praktikans.length > 0 ?
                                        praktikans.map(praktik => {
                                            const { id, nama, jurusan, fakultas, tahun_masuk, status } = praktik
                                            return (
                                                <tr key={id}>
                                                    <td>{id}</td>
                                                    <td>{nama}</td>
                                                    <td>{jurusan}</td>
                                                    <td>{fakultas}</td>
                                                    <td>{tahun_masuk}</td>
                                                    <td>{status}</td>
                                                    <td>
                                                        <Link to={`/praktikan/edit/${id}`} className='btn btn-sm btn-outline-success'>Edit</Link>
                                                        <button
                                                            onClick={() => deleteHandler(+id)}
                                                            className='btn btn-sm btn-outline-danger'
                                                        >Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        }) :
                                        <Loading />
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListPraktikan