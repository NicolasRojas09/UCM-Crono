const ordenes = [{ordenC: 'Orden Cronologico por Año', valor: 1},
                 {ordenC: 'Orden Cronologico por Historia', valor: 2}]
const orden = document.querySelector("#orden")
const btnGenerar = document.querySelector("button.generarOrden")
const URL = "../json/peliculas.json"
let Peliculas = []

const peticionFetch = async ()=> {
    const response = await fetch(URL)
    const data = await response.json()
          return data
}
const cargarContenido = async ()=> {
        try {
            Peliculas = await peticionFetch()
        } catch (error) {
            alert("No se pudo cargar el contenido, vuelva a intentarlo mas tarde")
        } 
}
cargarContenido()

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
        ifValoruno()
    }
    if(ordenSeleccionada() === 2){
        ifValordos()
    }
}

function recorrerBtn(valorBtn) {
    const resultado = Peliculas.find((pelicula) => pelicula.imagen === valorBtn)
    crearDetallado(resultado)
}    
function fechasUCM() {
    const DateTime = luxon.DateTime
    const inicioUCM = DateTime.fromObject(
        {day: 30, month: 4, year: 2008}
    )
    const now = DateTime.now()
    const resta = now.minus({year: 2008})
    const inicioTxtEspera = document.querySelector("#textoDeEspera")
    inicioTxtEspera.innerHTML = ""
    inicioTxtEspera.innerHTML = `   <p class="letrasBlancas titulo">El Universo Cinematografico de Marvel inicio el ${inicioUCM.day}/${inicioUCM.month}/${inicioUCM.year} <br>
                                        y nos entrego increibles historias hasta el dia de hoy. <br>
                                        Marvel lleva creando este maravilloso Universo por más de ${resta.year} años, <br>
                                        y esperemos que por muchos mas.</p>
                                        <img src="./imagenes/Marvel_Cinematic_Universe_logo.png" class="logoUcm" alt="Marvel Cinematic Universe">`
}
fechasUCM()

btnGenerar.addEventListener("click", mostrarLista)