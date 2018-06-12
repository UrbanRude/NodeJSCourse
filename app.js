let empleados = [
    {
        id:1,
        nombre:'Urbano'
    },
    {
        id:2,
        nombre:'Martha'
    },
    {
        id:3,
        nombre:'Jose'
    }
];

let salarios = [
    {
        id:1,
        salario:100
    },
    {
        id:2,
        salario:200
    }
];

let getEmpleado = ( id, callback ) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id );
    if ( !empleadoDB ){
        callback(`No existe un empleado con el ID ${id}`);
    }else{
        callback( null, empleadoDB);
    }
};

let getSalario = ( empleado, callback ) => {
    let salarioDB = salarios.find( salario => salario.id === empleado.id);
    if( !salarioDB ){
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`);
    }else{
        callback( null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        } );
    }
};

getEmpleado( 3, ( err,empleado ) => {
    if( err ){
        return console.log(err);
    }
    getSalario( empleado, (err,respuesta) => {
        if( err ){
            return console.log(err);
        }
        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
    } );
});