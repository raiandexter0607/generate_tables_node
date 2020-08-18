const argv = requiere('./confi/yargs.js').argv;


const {crearArchivo} = require('./multiplicar/multiplicar');
const {listarTabla} = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch(comando){
    case 'listar': console.log('listar')
            listarTabla(argv.base, argv.limite)
           .then(archivo=> console.log(`Proceso finalizado ${archivo}`))
           .catch(e => console.log(e));
           break;
    case 'crear': 
         crearArchivo(argv.base, argv.limite)
          .then(archivo=> console.log(`Archivo creado: ${archivo}`))
          .catch(e => console.log(e)); 
          break;

    default: console.log('Comando no reonocido');

}

console.log(argv)


/* console.log(process.argv) */

/* let argv2 = process.argv;
console.log('limite',argv.limite); */
 

/* let base = 'abc'; */



