import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const App = (props) => {
  return (
    <div className="blanco">
        <div className="container">
            <div className="row tarjeta">
                <Card className="col-md-3 cart">
                    <CardImg top width="100%" src="https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_41180056_1elru12j8" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h2">TABCIN ACTIVE DÍA</CardTitle>
                    <CardTitle tag="h3">$44.00 MXN</CardTitle>
                    <CardText tag="h4">12 Cápsulas Caja Paracetamol 250 MG</CardText>
                    <Button className="col-md-12 comprar" color="primary"><h1>Comprar</h1></Button>
                    </CardBody>
                </Card>
                <Card className="col-md-3 cart">
                    <CardImg top width="100%" src="https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp800Wx800H_46040007_1e45eiqj2" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h2">LYSOL TOALLITAS DESINFECTANTES</CardTitle>
                    <CardTitle tag="h3">$113.00 MXN</CardTitle>
                    <CardText tag="h4">80 Piezas Bote</CardText>
                    <Button className="col-md-12 comprar" color="primary"><h1>Comprar</h1></Button>
                    </CardBody>
                </Card>
                <Card className="col-md-3 cart">
                    <CardImg top width="100%" src="https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp800Wx800H_2020089_1ebflahhb" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h2">CETAPHIL LIMPIADOR LÍQUIDO</CardTitle>
                    <CardTitle tag="h3">$244.00 MXN</CardTitle>
                    <CardText tag="h4">237 ML Bote</CardText>
                    <Button className="col-md-12 comprar" color="primary"><h1>Comprar</h1></Button>
                    </CardBody>
                </Card>
                <Card className="col-md-3 cart">
                    <CardImg top width="100%" src="https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp800Wx800H_41160003_1emdupv9k" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h2">ADEROGYL SOLUCIÓN ORAL EN AMPOLLETAS DE 3ML</CardTitle>
                    <CardTitle tag="h3">$116.00 MXN</CardTitle>
                    <CardText tag="h4">5 Piezas Caja Vitamina a 3.3 MG</CardText>
                    <Button className="col-md-12 comprar" color="primary"><h1>Comprar</h1></Button>
                    </CardBody>
                </Card>
                <Card className="col-md-3 cart">
                    <CardImg top width="100%" src="https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp800Wx800H_41180097_1db1v4mvj" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h2">FLANAX 550</CardTitle>
                    <CardTitle tag="h3">$264.00 MXN</CardTitle>
                    <CardText tag="h4">24 Tabletas Caja Naproxeno Sódico 550 MG</CardText>
                    <Button className="col-md-12 comprar" color="primary"><h1>Comprar</h1></Button>
                    </CardBody>
                </Card>
                <Card className="col-md-3 cart">
                    <CardImg top width="100%" src="https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp800Wx800H_30005_1d6g6qe3j" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h2">DEPAKENE 30 CÁPSULAS CAJA</CardTitle>
                    <CardTitle tag="h3">$452.00 MXN</CardTitle>
                    <CardText tag="h4">Ácido valpróico 250 MG</CardText>
                    <Button className="col-md-12 comprar" color="primary"><h1>Comprar</h1></Button>
                    </CardBody>
                </Card>
                <Card className="col-md-3 cart">
                    <CardImg top width="100%" src="https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp480Wx480H_30193_1eh3t4u68" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h2">BLOPRESS PLUS 14 TABLETAS CAJA</CardTitle>
                    <CardTitle tag="h3">$437.00 MXN</CardTitle>
                    <CardText tag="h4">Candesartán cilexetilo 16 MG</CardText>
                    <Button className="col-md-12 comprar" color="primary"><h1>Comprar</h1></Button>
                    </CardBody>
                </Card>
                <Card className="col-md-3 cart">
                    <CardImg top width="100%" src="https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_30307_1d6g6qe3j" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h2">FENABBOTT 40 TABLETAS FRASCO</CardTitle>
                    <CardTitle tag="h3">$350.00 MXN</CardTitle>
                    <CardText tag="h4">Fenobarbital 100 MG</CardText>
                    <Button className="col-md-12 comprar" color="primary"><h1>Comprar</h1></Button>
                    </CardBody>
                </Card>
                <Card className="col-md-3 cart">
                    <CardImg top width="100%" src="https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp800Wx800H_30239_1emtd6fku" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h2">EPIVAL ER 60 TABLETAS CAJA</CardTitle>
                    <CardTitle tag="h3">$1,719.00 MXN</CardTitle>
                    <CardText tag="h4">Valproato semisódico 500 MG</CardText>
                    <Button className="col-md-12 comprar" color="primary"><h1>Comprar</h1></Button>
                    </CardBody>
                </Card>
                
            </div>
        </div>
    </div>
  );
};

export default App;