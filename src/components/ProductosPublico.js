import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {obtenerProductosAction} from '../actions/productoActions'
import ProductoPublico from './ProductoPublico'
import bolsonesimg from '../bolsonesimg.png'

 const Productos = () => {

    const dispatch = useDispatch()

    useEffect( () => {
        const cargarProductos = () => dispatch ( obtenerProductosAction() )
        cargarProductos()
        //eslint-disable-next-line
    }, [])

    //obtener el state
    const productos = useSelector ( state => state.productos.productos)
    const error = useSelector (state => state.productos.error)
    const cargando = useSelector (state => state.productos.loading)

     return(
         <Fragment>
            <div className="flotanteRedireccion"><Link to={'/alejo'} className="text-light">.</Link></div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
                <div className="container">
                    <div className="col-7">
                        <h1><Link to={'/'} className="text-light">La Quinta Bolsones</Link></h1>
                    </div>
                    <div className="col-5">
                        <Link to={'/'} className="text-light"><img src={bolsonesimg} className="img-fluid logoimg"/></Link>
                    </div>
                </div>
            </nav>
             <h2 className="text-center my-5">Listado de Productos</h2>
             {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
             {cargando ? <p className="text-center mt-4">Cargando...</p> : null}
             <table className="table table-striped">
                 <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                 </thead>
                 <tbody>
                    {productos.length === 0 ? <tr><td>No hay productos</td></tr> :
                        productos.map(producto => (
                            <ProductoPublico
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    }
                 </tbody>
             </table>
         </Fragment>
    )
 }
 export default Productos