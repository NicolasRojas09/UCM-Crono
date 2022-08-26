const ordenes = [{ordenC: 'Orden Cronologico por Año', valor: 1},
                 {ordenC: 'Orden Cronologico por Historia', valor: 2}]
const orden = document.querySelector("#orden")
const btnGenerar = document.querySelector("button.generarOrden")

const cargarOrdenes = (select, array)=> {
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.valor}">${elemento.ordenC}</option>`
        });
    }
}
cargarOrdenes(orden, ordenes)

const ordenSeleccionada = () =>{
    if(orden.value === "1"){
        return 1
    }
    if(orden.value !== "1" && orden.value !== "..."){
        return 2
    }
}

const mostrarLista = ()=> {
    if(ordenSeleccionada() === 1){
        const cuerpo = document.querySelector("#cajaCards")
        cuerpo.innerHTML = ""
        Peliculas.sort((a, b) => {
            if (a.ordenSalida > b.ordenSalida) {
                return 1
            }
            if (a.ordenSalida < b.ordenSalida) {
                return -1
            }
            return 0
            })
        Peliculas.forEach(pelicula => {
            cuerpo.innerHTML += `<div class="card text-bg-dark m-1" style="width: 12rem;">
                                    <img src="/imagenes/${pelicula.imagen}.jpg" class="card-img-top imagenTamaño">
                                    <div class="card-body d-flex flex-column justify-content-between">
                                        <h5 class="card-title titulo">${pelicula.nombre}</h5>
                                        <p class="card-text titulo">Year: ${pelicula.year} <button id="${pelicula.imagen}" class="position-absolute bottom-0 end-0 btn btn-dark">+</button></p>
                                    </div>
                                 </div>`
        })
    }
    if(ordenSeleccionada() === 2){
        const cuerpo = document.querySelector("#cajaCards")
        cuerpo.innerHTML = ""
        Peliculas.sort((a, b) => {
        if (a.ordenHistoria > b.ordenHistoria) {
            return 1
        }
        if (a.ordenHistoria < b.ordenHistoria) {
            return -1
        }
        return 0
        })
        Peliculas.forEach(pelicula => {
        cuerpo.innerHTML += `<div class="card text-bg-dark m-1" style="width: 12rem;">
                                <img src="/imagenes/${pelicula.imagen}.jpg" class="card-img-top imagenTamaño">
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <h5 class="card-title titulo">${pelicula.nombre}</h5>
                                    <p class="card-text titulo">Year: ${pelicula.year} <button id="${pelicula.imagen}" class="position-absolute bottom-0 end-0 btn btn-dark">+</button></p>
                                </div>
                             </div>`
        })
    }
    
    // Peliculas.forEach(pelicula => {
    //     debugger
    //     const btnDetalle = document.querySelector(`#${pelicula.imagen}`)
    //     btnDetalle.addEventListener("click", recorrerBtn(pelicula.imagen))
    //     if(recorrerBtn(pelicula.imagen)){
    //         console.log(resultado)
    //     }
    // })

}

const recorrerBtn = (valorBtn)=> {
    const resultado = Peliculas.find((pelicula) => pelicula.imagen === valorBtn)
    console.log(resultado)
}                     

btnGenerar.addEventListener("click", mostrarLista)



