let deadpool = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : 'Regeneracion',
    getNombre: function() {
        return `${ this.nomber } ${ this.apellido } - poder ${ this.poder }`
    }
}

console.log(deadpool.getNombre());

let { nombre:nom,apellido,poder } = deadpool;

console.log(nom,apellido,poder);