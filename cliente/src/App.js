import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Productos from './components/productos/Productos';
import Login from './components/auth/Login';
import Registro from './components/auth/Registro';
import CuentaCliente from './components/cuenta-cliente/CuentaCliente';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/rutas/RutaPrivada';

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}


function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registro" component={Registro} />
            <RutaPrivada exact path="/cuenta-cliente" component={CuentaCliente} />
          </Switch>
        </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;
