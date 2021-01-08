import React, {useContext, useEffect} from 'react';
import Barra from '../layout/Barra';
import AuthContext from '../../context/autenticacion/authContext';


const CuentaCliente = () => {

    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);


    //SOLO SE ACCEDE REGISTRANDOSE DEL LOGIN
    return ( 
        <div className="contenedor-app">
            

            <div className="seccion-principal">
                <Barra />
            
                <main>
                    
                </main>
            </div>
        </div>
     );
}
 
export default CuentaCliente;