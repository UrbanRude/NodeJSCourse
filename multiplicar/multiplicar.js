
const fs = require('fs');
const colors = require('colors');

let crearArchivo = ( base,limite=10 ) => {
    return new Promise( ( resolve,reject ) => {
        if( !Number( base )){
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }
        let data = '';
        for(let i=1; i<=limite; i++){
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }
        fs.writeFile( `tablas/tabla-${ base }.txt`, data, ( err ) => {
            if ( err ){
                reject( err );
            }else{
                resolve(`tabla-${ base }.txt`);
            } 
        });
    });
}

let listarTabla = ( base,limite = 10 ) => {
    return new Promise( (resolve,reject) => {
       if( !Number( base ) || !Number( limite )){
           reject(`Uno de los valores no es un numero`);
           return;
       } 
       let data = '======================== \n';
       data += `    TABLA DEL ${ base }    \n`;
       data += '======================== \n';
       for( let i=1; i <= limite; i++  ){
           data += `${ base } * ${ i } = ${ base * i } \n`;
       }
       resolve( data.green );

    } );
}


module.exports = {
    crearArchivo,
    listarTabla
}

