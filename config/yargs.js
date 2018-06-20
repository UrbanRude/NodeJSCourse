

const descripcion = {
        demand:true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }

const completado = {
    demand:true,
    alias: 'c',
    descripcion: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
                .command( 'crear','Crear un elemento por hacer', {
                    descripcion
                })
                .command( 'actualizar', 'Actualiza el estado completado de un tarea', {
                    descripcion,
                    completado
                })
                .command( 'borrar', 'Elimina un registro del archivo json', {
                    descripcion
                })
                .help()
                .argv;
                
module.exports = {
    argv
};