import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';

const Barra = () => {

    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    return ( 
        <header className="app-header">
            <h1 className="nUsuario">Farma-Star</h1>
            { usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span> <span>{usuario.apellido}</span>!</p> : null }
        
            <nav className="nav-principal">
                <button 
                    className="btn btn-danger cerrar-sesion"
                    onClick={() => cerrarSesion() }
                ><h4>Cerrar Sesión</h4></button>
            </nav>
        </header>
     );
}
 
export default Barra;