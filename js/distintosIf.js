function ifValoruno() {
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
    cuerpo.innerHTML += `   <div class="card text-bg-dark m-1" style="width: 12rem;">
                                <img src="./imagenes/${pelicula.imagen}.jpg" class="card-img-top imagenTamaño">
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <h5 class="card-title titulo">${pelicula.nombre}</h5>
                                    <p class="card-text titulo">Year: ${pelicula.year} <button id="${pelicula.imagen}" class="position-absolute bottom-0 end-0 btn btn-dark">+</button></p>
                                </div>
                            </div>`
    })
    const btnDetalleIron_Man = document.querySelector("#Iron_Man")
    const btnDetalleThe_incredible_Hulk = document.querySelector("#The_incredible_Hulk")
    const btnDetalleIron_Man_2 = document.querySelector("#Iron_Man_2")
    const btnDetalleThor = document.querySelector("#Thor")
    const btnDetalleCapitan_America_1 = document.querySelector("#Capitan_America_1")
    const btnDetalleThe_Avengers_1 = document.querySelector("#The_Avengers_1")
    const btnDetalleIron_Man_3 = document.querySelector("#Iron_Man_3")
    const btnDetalleThor_TheDarkWorld = document.querySelector("#Thor_TheDarkWorld")
    const btnDetalleCapitan_America_2 = document.querySelector("#Capitan_America_2")
    const btnDetalleGuardianes_de_la_galaxia = document.querySelector("#Guardianes_de_la_galaxia")
    const btnDetalleAvengers_AgeOfUltron = document.querySelector("#Avengers_AgeOfUltron")
    const btnDetalleAnt_Man = document.querySelector("#Ant_Man")
    const btnDetalleCapitan_America_CivilWar = document.querySelector("#Capitan_America_CivilWar")
    const btnDetalleDr_Strange = document.querySelector("#Dr_Strange")
    const btnDetalleguardians2 = document.querySelector("#guardians-of-the-galaxy-vol2")
    const btnDetalleSpider_Man_Homecoming = document.querySelector("#Spider_Man_Homecoming")
    const btnDetalleThor_Ragnarok = document.querySelector("#Thor_Ragnarok")
    const btnDetalleBlack_Panther = document.querySelector("#Black_Panther")
    const btnDetalleAvengers_Infinity_War = document.querySelector("#Avengers_Infinity_War")
    const btnDetalleAnt_Man_y_la_Avispa = document.querySelector("#Ant_Man_y_la_Avispa")
    const btnDetallecaptain_marvel = document.querySelector("#captain_marvel")
    const btnDetalleavengers_endgame = document.querySelector("#avengers_endgame")
    const btnDetalleSpider_Man_Lejos_de_casa = document.querySelector("#Spider_Man_Lejos_de_casa")
    const btnDetalleWandaVision = document.querySelector("#WandaVision")
    const btnDetalleFalcon_and_the_WinterSoldier = document.querySelector("#Falcon_and_the_WinterSoldier")
    const btnDetalleLoki = document.querySelector("#Loki")
    const btnDetalleblack_widow = document.querySelector("#black_widow")
    const btnDetalleWhat_if = document.querySelector("#What_if")
    const btnDetalleShang_Chi = document.querySelector("#Shang_Chi")
    const btnDetalleEternals = document.querySelector("#Eternals")
    const btnDetallehawkeye = document.querySelector("#hawkeye")
    const btnDetalleSpider_Man_No_Way_Home = document.querySelector("#Spider_Man_No_Way_Home")
    const btnDetalleMoon_Night = document.querySelector("#Moon_Night")
    const btnDetalleDoctor_Strange_en_el_multiverso_de_la_locura = document.querySelector("#Doctor_Strange_en_el_multiverso_de_la_locura")
    const btnDetallems_marvel = document.querySelector("#ms_marvel")
    const btnDetalleThor_Love_and_Thunder = document.querySelector("#Thor_Love_and_Thunder")
    
    btnDetalleIron_Man.onclick = () => {recorrerBtn("Iron_Man")}
    btnDetalleThe_incredible_Hulk.onclick = () => {recorrerBtn("The_incredible_Hulk")}
    btnDetalleIron_Man_2.onclick = () => {recorrerBtn("Iron_Man_2")}
    btnDetalleThor.onclick = () => {recorrerBtn("Thor")}
    btnDetalleCapitan_America_1.onclick = () => {recorrerBtn("Capitan_America_1")}
    btnDetalleThe_Avengers_1.onclick = () => {recorrerBtn("The_Avengers_1")}
    btnDetalleIron_Man_3.onclick = () => {recorrerBtn("Iron_Man_3")}
    btnDetalleThor_TheDarkWorld.onclick = () => {recorrerBtn("Thor_TheDarkWorld")}
    btnDetalleCapitan_America_2.onclick = () => {recorrerBtn("Capitan_America_2")}
    btnDetalleGuardianes_de_la_galaxia.onclick = () => {recorrerBtn("Guardianes_de_la_galaxia")}
    btnDetalleAvengers_AgeOfUltron.onclick = () => {recorrerBtn("Avengers_AgeOfUltron")}
    btnDetalleAnt_Man.onclick = () => {recorrerBtn("Ant_Man")}
    btnDetalleCapitan_America_CivilWar.onclick = () => {recorrerBtn("Capitan_America_CivilWar")}
    btnDetalleDr_Strange.onclick = () => {recorrerBtn("Dr_Strange")}
    btnDetalleguardians2.onclick = () => {recorrerBtn("guardians-of-the-galaxy-vol2")}
    btnDetalleSpider_Man_Homecoming.onclick = () => {recorrerBtn("Spider_Man_Homecoming")}
    btnDetalleThor_Ragnarok.onclick = () => {recorrerBtn("Thor_Ragnarok")}
    btnDetalleBlack_Panther.onclick = () => {recorrerBtn("Black_Panther")}
    btnDetalleAvengers_Infinity_War.onclick = () => {recorrerBtn("Avengers_Infinity_War")}
    btnDetalleAnt_Man_y_la_Avispa.onclick = () => {recorrerBtn("Ant_Man_y_la_Avispa")}
    btnDetallecaptain_marvel.onclick = () => {recorrerBtn("captain_marvel")}
    btnDetalleavengers_endgame.onclick = () => {recorrerBtn("avengers_endgame")}
    btnDetalleSpider_Man_Lejos_de_casa.onclick = () => {recorrerBtn("Spider_Man_Lejos_de_casa")}
    btnDetalleWandaVision.onclick = () => {recorrerBtn("WandaVision")}
    btnDetalleFalcon_and_the_WinterSoldier.onclick = () => {recorrerBtn("Falcon_and_the_WinterSoldier")}
    btnDetalleLoki.onclick = () => {recorrerBtn("Loki")}
    btnDetalleblack_widow.onclick = () => {recorrerBtn("black_widow")}
    btnDetalleWhat_if.onclick = () => {recorrerBtn("What_if")}
    btnDetalleShang_Chi.onclick = () => {recorrerBtn("Shang_Chi")}
    btnDetalleEternals.onclick = () => {recorrerBtn("Eternals")}
    btnDetallehawkeye.onclick = () => {recorrerBtn("hawkeye")}
    btnDetalleSpider_Man_No_Way_Home.onclick = () => {recorrerBtn("Spider_Man_No_Way_Home")}
    btnDetalleMoon_Night.onclick = () => {recorrerBtn("Moon_Night")}
    btnDetalleDoctor_Strange_en_el_multiverso_de_la_locura.onclick = () => {recorrerBtn("Doctor_Strange_en_el_multiverso_de_la_locura")}
    btnDetallems_marvel.onclick = () => {recorrerBtn("ms_marvel")}
    btnDetalleThor_Love_and_Thunder.onclick = () => {recorrerBtn("Thor_Love_and_Thunder")}
}

function ifValordos() {
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
    cuerpo.innerHTML += `   <div class="card text-bg-dark m-1" style="width: 12rem;">
                                <img src="./imagenes/${pelicula.imagen}.jpg" class="card-img-top imagenTamaño">
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <h5 class="card-title titulo">${pelicula.nombre}</h5>
                                    <p class="card-text titulo">Year: ${pelicula.year} <button id="${pelicula.imagen}" class="position-absolute bottom-0 end-0 btn btn-dark">+</button></p>
                                </div>
                            </div>`
    })
    const btnDetalleIron_Man = document.querySelector("#Iron_Man")
    const btnDetalleThe_incredible_Hulk = document.querySelector("#The_incredible_Hulk")
    const btnDetalleIron_Man_2 = document.querySelector("#Iron_Man_2")
    const btnDetalleThor = document.querySelector("#Thor")
    const btnDetalleCapitan_America_1 = document.querySelector("#Capitan_America_1")
    const btnDetalleThe_Avengers_1 = document.querySelector("#The_Avengers_1")
    const btnDetalleIron_Man_3 = document.querySelector("#Iron_Man_3")
    const btnDetalleThor_TheDarkWorld = document.querySelector("#Thor_TheDarkWorld")
    const btnDetalleCapitan_America_2 = document.querySelector("#Capitan_America_2")
    const btnDetalleGuardianes_de_la_galaxia = document.querySelector("#Guardianes_de_la_galaxia")
    const btnDetalleAvengers_AgeOfUltron = document.querySelector("#Avengers_AgeOfUltron")
    const btnDetalleAnt_Man = document.querySelector("#Ant_Man")
    const btnDetalleCapitan_America_CivilWar = document.querySelector("#Capitan_America_CivilWar")
    const btnDetalleDr_Strange = document.querySelector("#Dr_Strange")
    const btnDetalleguardians2 = document.querySelector("#guardians-of-the-galaxy-vol2")
    const btnDetalleSpider_Man_Homecoming = document.querySelector("#Spider_Man_Homecoming")
    const btnDetalleThor_Ragnarok = document.querySelector("#Thor_Ragnarok")
    const btnDetalleBlack_Panther = document.querySelector("#Black_Panther")
    const btnDetalleAvengers_Infinity_War = document.querySelector("#Avengers_Infinity_War")
    const btnDetalleAnt_Man_y_la_Avispa = document.querySelector("#Ant_Man_y_la_Avispa")
    const btnDetallecaptain_marvel = document.querySelector("#captain_marvel")
    const btnDetalleavengers_endgame = document.querySelector("#avengers_endgame")
    const btnDetalleSpider_Man_Lejos_de_casa = document.querySelector("#Spider_Man_Lejos_de_casa")
    const btnDetalleWandaVision = document.querySelector("#WandaVision")
    const btnDetalleFalcon_and_the_WinterSoldier = document.querySelector("#Falcon_and_the_WinterSoldier")
    const btnDetalleLoki = document.querySelector("#Loki")
    const btnDetalleblack_widow = document.querySelector("#black_widow")
    const btnDetalleWhat_if = document.querySelector("#What_if")
    const btnDetalleShang_Chi = document.querySelector("#Shang_Chi")
    const btnDetalleEternals = document.querySelector("#Eternals")
    const btnDetallehawkeye = document.querySelector("#hawkeye")
    const btnDetalleSpider_Man_No_Way_Home = document.querySelector("#Spider_Man_No_Way_Home")
    const btnDetalleMoon_Night = document.querySelector("#Moon_Night")
    const btnDetalleDoctor_Strange_en_el_multiverso_de_la_locura = document.querySelector("#Doctor_Strange_en_el_multiverso_de_la_locura")
    const btnDetallems_marvel = document.querySelector("#ms_marvel")
    const btnDetalleThor_Love_and_Thunder = document.querySelector("#Thor_Love_and_Thunder")
    
    btnDetalleIron_Man.onclick = () => {recorrerBtn("Iron_Man")}
    btnDetalleThe_incredible_Hulk.onclick = () => {recorrerBtn("The_incredible_Hulk")}
    btnDetalleIron_Man_2.onclick = () => {recorrerBtn("Iron_Man_2")}
    btnDetalleThor.onclick = () => {recorrerBtn("Thor")}
    btnDetalleCapitan_America_1.onclick = () => {recorrerBtn("Capitan_America_1")}
    btnDetalleThe_Avengers_1.onclick = () => {recorrerBtn("The_Avengers_1")}
    btnDetalleIron_Man_3.onclick = () => {recorrerBtn("Iron_Man_3")}
    btnDetalleThor_TheDarkWorld.onclick = () => {recorrerBtn("Thor_TheDarkWorld")}
    btnDetalleCapitan_America_2.onclick = () => {recorrerBtn("Capitan_America_2")}
    btnDetalleGuardianes_de_la_galaxia.onclick = () => {recorrerBtn("Guardianes_de_la_galaxia")}
    btnDetalleAvengers_AgeOfUltron.onclick = () => {recorrerBtn("Avengers_AgeOfUltron")}
    btnDetalleAnt_Man.onclick = () => {recorrerBtn("Ant_Man")}
    btnDetalleCapitan_America_CivilWar.onclick = () => {recorrerBtn("Capitan_America_CivilWar")}
    btnDetalleDr_Strange.onclick = () => {recorrerBtn("Dr_Strange")}
    btnDetalleguardians2.onclick = () => {recorrerBtn("guardians2")}
    btnDetalleSpider_Man_Homecoming.onclick = () => {recorrerBtn("Spider_Man_Homecoming")}
    btnDetalleThor_Ragnarok.onclick = () => {recorrerBtn("Thor_Ragnarok")}
    btnDetalleBlack_Panther.onclick = () => {recorrerBtn("Black_Panther")}
    btnDetalleAvengers_Infinity_War.onclick = () => {recorrerBtn("Avengers_Infinity_War")}
    btnDetalleAnt_Man_y_la_Avispa.onclick = () => {recorrerBtn("Ant_Man_y_la_Avispa")}
    btnDetallecaptain_marvel.onclick = () => {recorrerBtn("captain_marvel")}
    btnDetalleavengers_endgame.onclick = () => {recorrerBtn("avengers_endgame")}
    btnDetalleSpider_Man_Lejos_de_casa.onclick = () => {recorrerBtn("Spider_Man_Lejos_de_casa")}
    btnDetalleWandaVision.onclick = () => {recorrerBtn("WandaVision")}
    btnDetalleFalcon_and_the_WinterSoldier.onclick = () => {recorrerBtn("Falcon_and_the_WinterSoldier")}
    btnDetalleLoki.onclick = () => {recorrerBtn("Loki")}
    btnDetalleblack_widow.onclick = () => {recorrerBtn("black_widow")}
    btnDetalleWhat_if.onclick = () => {recorrerBtn("What_if")}
    btnDetalleShang_Chi.onclick = () => {recorrerBtn("Shang_Chi")}
    btnDetalleEternals.onclick = () => {recorrerBtn("Eternals")}
    btnDetallehawkeye.onclick = () => {recorrerBtn("hawkeye")}
    btnDetalleSpider_Man_No_Way_Home.onclick = () => {recorrerBtn("Spider_Man_No_Way_Home")}
    btnDetalleMoon_Night.onclick = () => {recorrerBtn("Moon_Night")}
    btnDetalleDoctor_Strange_en_el_multiverso_de_la_locura.onclick = () => {recorrerBtn("Doctor_Strange_en_el_multiverso_de_la_locura")}
    btnDetallems_marvel.onclick = () => {recorrerBtn("ms_marvel")}
    btnDetalleThor_Love_and_Thunder.onclick = () => {recorrerBtn("Thor_Love_and_Thunder")}
}