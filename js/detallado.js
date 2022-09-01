const crearDetallado = (resultado)=> {
    const detallar = document.querySelector("#cajaDetalle")
    detallar.innerHTML = ""
    detallar.innerHTML = `<div class="d-flex ms-4 mt-4 me-4">
                            <div class="d-flex flex-column">
                                <img src="./imagenes/${resultado.imagen}.jpg" class="imagenDetalle">
                            </div>
                            <div class="d-flex flex-column">
                                <h4 class="titulo">${resultado.nombre}  |  Año: ${resultado.year}</h4>
                                <iframe class="videoT ms-4 mb-4" src="${resultado.trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                          </div>
                          <div class="ms-4 me-4">
                              <p><b>Sinopsis:</b> ${resultado.sinopsis}</p>
                          </div>
                          <button class="modalCerrar position-absolute m-1 top-0 end-0 btn btn-dark">x</button>`
    const mostrarModal = document.querySelector(".modalDetalle")
    mostrarModal.classList.add("mostrarModal")
    const cerrarModal = document.querySelector(".modalCerrar")
    cerrarModal.addEventListener("click", ()=>{
        mostrarModal.classList.remove("mostrarModal")
        detallar.innerHTML = ""
    })
}