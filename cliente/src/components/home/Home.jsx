import React, {Fragment} from 'react';

import HeaderHome from '../layout/HeaderHome';
import PrimerBarra from '../layout/PrimerBarra';
import Carrusel from '../layout/Carrusel';
import BarraEnvios from '../layout/BarraEnvios';
import ProductosHome from '../layout/ProductosHome';
import Mapa from '../layout/Mapa';


const Home = () => {

    
    return ( 
        <Fragment>

            <PrimerBarra />

            <HeaderHome />

            <Carrusel />

            <BarraEnvios />

            <ProductosHome />

            <Mapa />

            
            

        </Fragment>
     );
}
 
export default Home;