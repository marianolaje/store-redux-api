import React from 'react';
import Header from './components/Header'
import Productos from './components/Productos'
import ProductosPublico from './components/ProductosPublico'
import NuevoProducto from './components/NuevoProducto'
import EditarProducto from './components/EditarProducto'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//redux
import { Provider } from 'react-redux';
import store from './store'


function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={ProductosPublico}/>
            <Route exact path="/alejo" component={Productos}/>
            <Route exact path="/productos/nuevo" component={NuevoProducto}/>
            <Route exact path="/productos/editar/:id" component={EditarProducto}/>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
