import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editarProductoAction} from '../actions/productoActions'
import {useHistory} from 'react-router-dom'

 const EditarProducto = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    //state para almacenar datos del form
    const [producto, setProducto] = useState({
        nombre: '',
        precio: ''
    })

    //producto a editar
    const productoEditar = useSelector(state => state.productos.productoeditar)

    useEffect(()=>{
        setProducto(productoEditar)
    }, [productoEditar])

    if(!productoEditar) return null

//leer los datos del form
    const onChangeFormulario = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const {nombre, precio} = producto

    const submitEditarProducto = e => {
        e.preventDefault()

        dispatch(editarProductoAction(producto))
        history.push('/')
    }

     return(
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Editar producto</h2>
                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placehoder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placehoder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>     )
 }
 export default EditarProducto