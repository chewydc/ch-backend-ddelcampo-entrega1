//-------------------------------------------------------------------
// Primer Desafio Entregable: CLASES
// Fecha de entrega tope: 10-09-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------
libro1= ['el señor de los anillos','William Golding']
libro2= ['Fundacion','Isaac Asimov']
libro3= ['el señor de los anillos 2','William Golding']

//-------------------------------------------------------------------
class Usuario {
    constructor (nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = [libros]
        this.mascotas = [mascotas]
    }
    getFullName(){
        return (this.nombre + ' ' + this.apellido);
    }

    addMascota(newmascota){
        if (!this.mascotas) { 
            this.mascotas = newmascota;
        }
        else {
            this.mascotas.push(newmascota)
        }
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook([n,a]){
        this.libros.push( 
            {
            'nombre': n,
            'autor': a
            }
        )
    }

    getBookNames(){
        let books= []; 
        this.libros.forEach(function(elemento){
            books.push(elemento.nombre);
        })
        return [books];
    }
}

//-------------------------------------------------------------------
console.log('------------------------------------------')

const a = new Usuario('Damian', 'del Campo', libro1 )
a.addMascota('gato')
a.addMascota('chancho')
a.addMascota('buho')
console.log('-Nombre completo de "a" es --> ' + a.getFullName())
console.log('-Cantidad de mascotas de "a" es --> ' + a.countMascotas())
a.addBook(libro2)
a.addBook(libro3)
console.log('-Nombre de libros de "a" --> ' + a.getBookNames())

console.log('------------------------------------------')

const b = new Usuario('Pepe', 'Argento', libro3 ,'carpincho')
console.log('-Nombre completo de "b" es --> ' + b.getFullName())
b.addMascota('goldfish')
console.log('-Cantidad de mascotas de "b" es --> ' + b.countMascotas())
console.log('-Nombre de libros de "b" --> ' + b.getBookNames())

console.log(a)
console.log(b)
//-------------------------------------------------------------------