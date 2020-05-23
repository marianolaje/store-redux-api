import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
    COMENZAR_EDICION_PRODUCTO
} from '../types'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'

//crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch(agregarProducto())
        try{
            //insertar en la api
            await clienteAxios.post('/productos', producto)

            //actualizar state
            dispatch(agregarProductoExito(producto))

            //Alerta
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )

        } catch (error) {
            console.log("error")
            dispatch(agregarProductoError(true))

            //alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

//si el producto se guarda en la DB
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

//si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})


//funcion que descarga los productos de la DB
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos())

        try{
            const respuesta = await clienteAxios.get('/productos')
            dispatch( descargaProductosExitosa(respuesta.data) )

        } catch (error) {
            dispatch(descargaProductosError())
            console.log(error)
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})


//Selecciona y elimina el producto
export function borrarProductoAction(id){
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id))

        try{
            await clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito())

            //si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado!',
                'El producto se ha eliminado correctamente',
                'success'
            )
        } catch ( err ){
            dispatch(eliminarProductoError())
            console.log(err)
        }

    }
}
const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})


//Colocar productos en edicion
export function obtenerProductoEditarAction(producto){
    return (dispatch) => {
        dispatch( obtenerProductoEditar(producto) )
    }
}

const obtenerProductoEditar = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})


//edita un registro en la API y state
export function editarProductoAction(producto){
    return async (dispatch) => {
        dispatch( editarProducto() )
        
        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto)
            dispatch(editarProductoExito(producto)) 
        } catch (err) {
            dispatch(editarProductoError(producto)) 
            console.log(err)
        }
    }
}

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
})

const editarProductoExito = producto => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})

const editarProductoError = producto => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
})