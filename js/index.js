debugger
let errado = true
let iniciar = confirm("desea iniciar el test?")
if(iniciar){
    let usuario = prompt("ingrese su nombre")
    do{
        let resultado = prompt("resuelva 5 + 2")
        let resultado2 = prompt("resuelva 5 + 5")
        if(((resultado == 7)&&(resultado2 == 10))||(usuario == "Hawking")){
            console.log("Perfecto eres un genio")
            alert("Perfecto eres un genio")
            errado = false
        }
        else{
            console.warn("intentalo de nuevo")
            alert("intentalo de nuevo")
            errado = true
        }
    }while(errado)
}