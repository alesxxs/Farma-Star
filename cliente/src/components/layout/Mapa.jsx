import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from '@emotion/styled';

const H1 = styled.h1 `
    font-weight: bold;
    text-align: center;
`;

const P = styled.p `
    font-weight: bold;
    text-align: center;
    font-size: 13px;
`;

const DIV = styled.div`
    width: 25%;
    height: 50%;
    margin: auto;
`;


const Mapa = () => {
    

    return ( 
        <div className="mapa">
            <DIV className="mapa-tiendas">
                <h1>Mapa de Tiendas</h1>
            </DIV>
            <div className="conf-mapa">
                <MapContainer center={[19.377045919963354, -99.15267547857663]} zoom={15} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[19.37238075815579, -99.15644578780775]}>
                        <Popup>
                        <H1>Farma-Star</H1> 
                        <P>Nos encontramos dentro de "Parque de los Venados"</P>
                        <P>Abierto las 24 horas del día</P>
                        </Popup>
                    </Marker>
                    <Marker position={[19.38368421134884, -99.14791194764697]}>
                        <Popup>
                        <H1>Farma-Star</H1> 
                        <P>Nos encontramos dentro de "Plaza Sama Center"</P>
                        <P>Abierto de 9am a 10pm</P>
                        </Popup>
                    </Marker>
                    <Marker position={[19.370305224231817, -99.14148839836305]}>
                        <Popup>
                        <H1>Farma-Star</H1> 
                        <P>Nos encontramos alado de "Metro Portales"</P>
                        <P>Abierto las 24 horas del día</P>
                        </Popup>
                    </Marker>
                    <Marker position={[19.3692498374689, -99.16404299574063]}>
                        <Popup>
                        <H1>Farma-Star</H1> 
                        <P>Nos encontramos dentro de "Walmart Universidad"</P>
                        <P>Abierto de 9am a 10pm</P>
                        </Popup>
                    </Marker>
                    <Marker position={[19.374150550268276, -99.17164163548632]}>
                        <Popup>
                        <H1>Farma-Star</H1> 
                        <P>Nos encontramos alado de "Hospital 20 de Noviembre"</P>
                        <P>Abierto las 24 horas del día</P>
                        </Popup>
                    </Marker>
                    <Marker position={[19.38439032628235, -99.16533126510336]}>
                        <Popup>
                        <H1>Farma-Star</H1> 
                        <P>Nos encontramos alado de "UMF 28 GABRIEL MANCERA"</P>
                        <P>Abierto las 24 horas del día</P>
                        </Popup>
                    </Marker>
                    <Marker position={[19.38223782903376, -99.12796679491021]}>
                        <Popup>
                        <H1>Farma-Star</H1> 
                        <P>Nos encontramos alado de "Parque de las Rosas"</P>
                        <P>Abierto las 24 horas del día</P>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
     );
}
 
export default Mapa;