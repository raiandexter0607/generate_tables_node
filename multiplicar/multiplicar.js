const fs = require('fs');

let data = '';

let listarTabla = (base, limite) =>{

    return new Promise((resolve, reject)=>{
        
        if(!Number(base) || !Number(limite)){reject(`El valor o base introducido ${base} no es un numero`); return;}
        
        for(let i=1; i<=limite; i++){
            console.log(`${base} * ${i} = ${base * i}\n`);
        }
   
     })

}

let crearArchivo = (base, limite)=>{

    return new Promise ((resolve, reject)=>{
        
        if(!Number(base)){reject(`El valor o base introducido ${base} no es un numero`); return;}

        for(let i=1; i<=limite; i++){ 
        data+= `${ base } * ${ i } = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`,data, (err) => {
        if (err) reject (err)
            else{
                    resolve(`The file tabla-${base}.txt has been saved!`)
                }
            
        
    })

    })


}

module.exports = {
    crearArchivo,
    listarTabla
}

