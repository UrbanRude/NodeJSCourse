

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direcion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;

let getInfo = async ( direccion ) => {

    try{

        let coors = await lugar.getLugarLatLong( direccion );
        let temp = await clima.getClima( coors.lat,coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temp }`;  

    }catch(e){
        return `No se pudo determinar el clima en la direccion ${ direccion }`;
    }
   

}

getInfo( argv.direccion )
    .then( mensaje => console.log( mensaje ) )
    .catch( error => console.log( error ));
