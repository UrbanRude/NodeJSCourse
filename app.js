

const { crearArchivo } = require('./multiplicar/multiplicar');

let base = '5';

crearArchivo( base )
    .then( archivo => console.log(`El archivo tabla-${ base }.txt ha sido creado`) )
    .catch( err => console.log( err ));