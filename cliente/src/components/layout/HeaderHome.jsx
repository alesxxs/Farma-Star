import React,{Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import styled from '@emotion/styled';

const HeaderHome = () => {

    return ( 
        
                <nav className="navbar navbar-expand-lg  barra">
                    <div className="container">
                        <span className="logo navbar-brand" href="/"><h1>Farma-Star</h1></span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse col-md-12 " id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                            <a className="nav-link text sep" href="#!"><h1>Productos</h1><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text sep" href="#!"><h1>Nosotros</h1></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text sep" href="#!"><h1>Contactos</h1></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text sep" href="Login"><h1>Iniciar Sesión</h1></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text sep" href="/registro"><h1>Registrarse</h1></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                  
             
                
     );
}

 
export default HeaderHome;