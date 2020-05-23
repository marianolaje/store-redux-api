import React from 'react'

const Producto = ({producto}) => {

    const {nombre, precio, id} = producto

    let textoWsp = `https://wa.me/5493513941443?text=Quiero%20el%20numero%20${id}%20-%20${nombre}%20-%20$${precio}`

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