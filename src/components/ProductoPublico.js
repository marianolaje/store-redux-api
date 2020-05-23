import React from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

//redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction } from '../actions/productoActions'

const Producto = ({producto}) => {

    const {nombre, precio, id} = producto

    const dispatch = useDispatch()

    let textoWsp = `https://wa.me/15555555555?text=Quiero%20el%20numero%20${id}`

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <button
                    type="button"
                    className="btn btn-danger"
                >
                    <a target="_blank" rel="noopener noreferrer" href={textoWsp}>Pedir</a>
                </button>
            </td>
        </tr>
    )
}

export default Producto