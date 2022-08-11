let continuar = false
function PelisNecesarias(){
    do {
        let peli = prompt("ingrese una de las tres peliculas").toLocaleLowerCase()
        if(peli == "avengers"){
            alert("Deberas haber visto antes si o si: Todas las peliculas de la Fase 1")
        }
        if(peli == "dr strange 2"){
            alert("Deberas haber visto antes si o si: Dr Strange, Wanda Vision, What if y Spider-Man: No Way Home")
        }
        if(peli == "iron man 2"){
            alert("Deberas haber visto antes si o si: Iron Man")
        }
        continuar = confirm ("desea continuar?")
    }while(continuar)
}

const Peliculas = []
class pelicula {
    constructor(ordenHistoria, ordenSalida, nombre, year) {
        this.ordenHistoria = ordenHistoria
        this.ordenSalida = ordenSalida
        this.nombre = nombre
        this.year = year
    }
}
function pelisFaseUno() {
    Peliculas.push(new pelicula(1,0 , "Iron Man", 2008))
    Peliculas.push(new pelicula(2,1 , "The Incredible Hulk", 2008))
    Peliculas.push(new pelicula(3,2 , "Iron Man 2", 2010))
    Peliculas.push(new pelicula(4,3 , "Thor", 2011))
    Peliculas.push(new pelicula(0,4 , "Captain America: The First Avenger", 2011))
    Peliculas.push(new pelicula(5,5 , "The Avengers", 2012))

}
pelisFaseUno()

function buscarPelicula(){
    let nombreBuscado = prompt("ingrese una pelicula para saber si se encuentra en la Fase 1")
    const existe = Peliculas.some(pelicula => pelicula.nombre === nombreBuscado)
    if(existe){
        alert("Efectivamente, esa pelicula esta dentro de la Fase 1")
    }
    else{
        alert("Esa pelicula no pertenece a la fase 1, por las dudas revise haber puesto bien el nombre y haber respetado las Mayusculas y minusculas")
    }
}