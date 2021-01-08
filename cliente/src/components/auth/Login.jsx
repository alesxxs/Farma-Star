import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

    // En caso de que el usuario o contraseña no existan

    useEffect(() => {
        if(autenticado) {
            props.history.push('cuenta-cliente');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    }, [mensaje, autenticado, props.history]);

    // State para iniciar sesion
    const [ usuario, guardarUsuario ] = useState({
        email:'',
        password: ''
    });

    // extraer de usuario
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === ''){
           mostrarAlerta('Todos los campos son obligatorios', 'alerta-error') 
        }


        // Pasarlo al action
        iniciarSesion({ email, password })
    }

   
    return ( 
        <div className="form-usuario">

            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg} </div>) : null}

            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-forma">
                        
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Correo Electrónico"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-forma ggg uno dos">
                        
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Contraseña"
                            onChange={onChange}
                            
                        />
                    </div>

                    <div className="gg">
                        <button type="submit" className="btn btn-primario btn-block ggInput"><p>Iniciar Sesión</p></button>
                    </div>
                </form>

                <div className="cuenta">
                    <p>¿Aún no tienes cuenta?</p>
                    <Link to={'/registro'} className="enlace-cuenta">
                        <p>Crear Cuenta</p>
                    </Link>
                </div>
                
            </div>
        </div>
     );
}
 
export default Login;