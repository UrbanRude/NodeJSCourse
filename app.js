

const argv = require('./config/yargs').argv;
const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ){

    case 'listar':
        listarTabla( argv.base, argv.limite )
        .then( data => console.log(`${ data }`))
        .catch( err => console.log( err ) );
    break;
    
    case 'crear':
        crearArchivo( argv.base,argv.limite )
        .then( archivo => console.log(`El archivo tabla-${ argv.base }.txt ha sido creado`) )
        .catch( err => console.log( err ));
    break;
    
    default:
        console.log(`Comando no reconocido`);
    break;

}


