// Iniciar servidor sudo npm run dev
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crear el servidor
const app = express();

// COnectar a la db
conectarDB();

// habilitar cors
app.use(cors());


// habilitar express.json leer datos que el usuario coloque
app.use(express.json({ extended: true }));

// puerto de la app
const PORT = process.env.PORT || 4001;

//IMportar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));

// arrancar puerto
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
}); 
