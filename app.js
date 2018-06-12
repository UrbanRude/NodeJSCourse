
// Callback sencillo
// setTimeout( () => {
//     console.log('Hola mundo!');
// }, 3000 );

let getUserById = ( id, callback ) => {
    let usuario = {
        nombre : 'Urbano',
        id
    }
    if( id === 10 ){
        callback(`El usuario con id ${ id }, no existe en la BD`);
    }else{
        callback( null,usuario );
    }
}

getUserById( 1 , ( err,usuario ) => {
    if( err ){
        return console.log(err);
    }
        console.log('Usuario de BD',usuario);
})