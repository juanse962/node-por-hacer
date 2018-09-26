const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion tarea por hacer'
};

const completado = {

    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'

}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}