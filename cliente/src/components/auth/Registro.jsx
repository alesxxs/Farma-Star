import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Registro = (props) => {

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    // En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado

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
        nombre: '',
        apellido: '',
        email:'',
        password: '',
        confirmar: ''
    });

    // extraer de usuario
    const { nombre, apellido, email, password, confirmar } = usuario;

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
        if(nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }


        // Password minimo de 12 caracteres
        if(password.length <12) {
            mostrarAlerta('La contraseña debe tener al menos 12 caracteres', 'alerta-error');
            return;
        }


        // Los 2 password sean iguales
        if(password !== confirmar){
            mostrarAlerta('Las contraseñas no son iguales', 'alerta-error');
            return;
        }


        // Pasarlo al action
        registrarUsuario({
            nombre,
            apellido,
            email,
            password
        });
         
    }

   
    return ( 
        <div className="form-usuario">
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg} </div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Registro</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-forma">
                        
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="Nombre(s)"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-forma">
                        
                        <input 
                            type="text"
                            id="apellido"
                            name="apellido"
                            value={apellido}
                            placeholder="Apellido(s)"
                            onChange={onChange}
                        />
                    </div>

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


                    <div className="campo-forma">
                        
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Contraseña (12 caracteres mínimo)"
                            onChange={onChange}
                        />
                    </div>    


                    <div className="campo-forma uno">
                        
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            placeholder="Repite tu Contraseña"
                            onChange={onChange}
                        />
                    </div>

                    <div className="gg">
                        <button type="submit" className="btn btn-primario btn-block ggInput"><p>Registrarse</p></button>
                    </div>
                </form>

                <div className="cuenta">
                    <p>¿Tienes Cuenta?</p>
                    <Link to={'/login'} className="enlace-cuenta">
                        <p>Inicia Sesión</p>
                    </Link>
                </div>
                
            </div>
        </div>
     );
}
 
export default Registro;