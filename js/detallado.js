const crearDetallado = ()=> {
    const detallar = document.querySelector("#cajaDetalle")
    detallar.innerHTML = ""
    detallar.innerHTML = `<div class="d-flex m-4">
                            <img src="/imagenes/Iron_Man.jpg" class="imagenDetalle">
                            <div class="m-4 d-flex flex-column justify-content-between">
                                <h3>Iron Man</h3>
                                <p><b>Sinopsis:</b> Tony Stark (Robert Downey Jr.), dueño de Industrias Stark, inventor consagrado, vendedor de armas y playboy multimillonario, es secuestrado en Afganistán después de una demostración armamentística para el Ejército de los Estados Unidos. Forzado por sus captores a fabricar un arma temible, acaba construyendo en secreto una armadura de alta tecnología revolucionaria que usa para escaparse.</p>
                                <h5>Año: 2008</h5>
                            </div>
                          </div>
                          <iframe class="videoT ms-4 me-4 mb-4" src="https://www.youtube.com/embed/EVFUfCUZbxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}
