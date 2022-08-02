let continuar = true

function PelisNecesarias(){
    do {
        let peli = prompt("ingrese una de las tres peliculas").toLocaleLowerCase()
        if(peli == "avengers"){
            alert("Deberas haber visto antes si o si: Iron man, Iron man 2, Capitán América y Thor")
        }
        if(peli == "dr strange 2"){
            alert("Deberas haber visto antes si o si: Dr Strange, Wanda Vision, What if y Spider-Man: No Way Home")
        }
        if(peli == "iron man 2"){
            alert("Deberas haber visto antes si o si: Iron Man")
        }
        let continuar = confirm ("desea continuar?")
    }while(continuar)
}