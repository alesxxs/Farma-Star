import React, {useEffect, useState} from 'react';
import { Button } from 'reactstrap';



const Consultas = () => {

   

    const [datos, leerDatos ] = useState({
        procedimiento: ''
    });

    const [ verDelegacion, leerDelegacion ] = useState({
        delegacion: ''
    });

    const [ error, cambiarError ] = useState(false);


    const [ consultar, guardarConsultar ] = useState(false);

    const [ texto, cambiarTexto ] = useState('')

    const {procedimiento} = datos;

    const cambiarDatos = e => {
        leerDatos( {
            ...datos,
            [e.target.name] : e.target.value
        });

        
    }

    const {delegacion} = verDelegacion;

    const cambiarDelegacion = e => {
        leerDelegacion( {
            ...verDelegacion,
            [e.target.name] : e.target.value
        });

        
    }

    const enviarFormulario = e => {
        e.preventDefault();

        
        

        // Validacion
        if(procedimiento === '' || delegacion === '') {
            cambiarError(true);
            return;
        }

        cambiarError(false);

        

        guardarConsultar(true);

        if(consultar) {
            
            guardarConsultar(false);
            
        }

        
        
    }

    

    

    useEffect(() => {
        const mensaje = () => {
            if(consultar){
                

                cambiarTexto(`El servicio de ${procedimiento} en la delegación ${delegacion} tiene un costo de $65 + material`);
                
            } 

            
        }
        mensaje();
    }, [consultar]);

    

    return ( 
        <div className="blanco">
            <div className="container">
                <div className="row">
                    <div className="mi-consulta">
                        <div className="texto-consulta">
                            <h1>Consultas medicas a domicilio gracias a Farma-Star</h1>
                        </div>

                        { error ? <p>Todos los campos son obligatorios</p> : null}

                        <form 
                            onSubmit={enviarFormulario}
                        >
                            <select 
                            name="procedimiento"
                            value={procedimiento}
                            onChange={cambiarDatos}
                            >
                                <option name="">-- Seleccione El Tipo De Procedimiento --</option>
                                <option name="consulta">Consulta Médica</option>
                                <option name="procesosSi">Procedimientos Médicos Invasores</option>
                                <option name="procesosNO">Procedimientos Médicos NO Invasores</option>                        
                            </select>

                            <select 
                            name="delegacion"
                            value={delegacion}
                            onChange={cambiarDelegacion}
                            >
                                <option name="">-- Seleccione Su Delegación --</option>
                                <option name="coyoacan">Coyoacán</option>
                                <option name="miguel">Miguel Hidalgo</option>
                                <option name="magdalena">La Magdalena Contreras</option>
                                <option name="tlahuac">Tláhuac</option>
                                <option name="azcapotzalco">Azcapotzalco</option>
                                <option name="iztacalco">Iztacalco</option>
                                <option name="alvaro">Alvaro Obregón</option>
                                <option name="xochimilco">Xochimilco</option>
                                <option name="venustiano">Venustiano Carranza</option>
                                <option name="tlalpan">Tlalpan</option>
                                <option name="cuahutemoc">Cuahutémoc</option>
                                <option name="iztapalapa">Iztapalapa</option>
                                <option name="benito">Benito Juárez</option>
                                <option name="gustavo">Gustavo A. Madero</option>
                            </select>

                            <Button type="submit" color="success">
                                Cotizar Consulta a Domicilio
                            </Button>
                                
                        </form>

                        {consultar ? <p>{texto}</p> : null}
                        
                       
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Consultas;