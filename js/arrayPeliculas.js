const Peliculas = []
class pelicula {
    constructor(ordenHistoria, ordenSalida, nombre, year, imagen) {
        this.ordenHistoria = ordenHistoria
        this.ordenSalida = ordenSalida
        this.nombre = nombre
        this.year = year
        this.imagen = imagen
    }
}
function pelisFaseUno() {
    Peliculas.push(new pelicula(3,0 , "Iron Man", 2008, "Iron_Man"))
    Peliculas.push(new pelicula(4,1 , "The Incredible Hulk", 2008, "The_incredible_Hulk"))
    Peliculas.push(new pelicula(5,2 , "Iron Man 2", 2010, "Iron_Man_2"))
    Peliculas.push(new pelicula(6,3 , "Thor", 2011, "Thor"))
    Peliculas.push(new pelicula(0,4 , "Captain America: The First Avenger", 2011, "Capitan_America_1"))
    Peliculas.push(new pelicula(7,5 , "The Avengers", 2012, "The_Avengers_1"))
}
pelisFaseUno()
function pelisFaseDos() {
    Peliculas.push(new pelicula(8,6 , "Iron Man 3", 2013, "Iron_Man_3"))
    Peliculas.push(new pelicula(9,7 , "Thor: The Dark World", 2013, "Thor_TheDarkWorld"))
    Peliculas.push(new pelicula(10,8 , "Captain America: The Winter Soldier", 2014, "Capitan_America_2"))
    Peliculas.push(new pelicula(11,9 , "Guardians of the Galaxy", 2014, "Guardianes_de_la_galaxia"))
    Peliculas.push(new pelicula(13,10 , "Avengers: Age of Ultron", 2015, "Avengers_AgeOfUltron"))
    Peliculas.push(new pelicula(14,11 , "Ant-Man", 2015, "Ant_Man"))
}
pelisFaseDos()
function pelisFaseTres() {
    Peliculas.push(new pelicula(15,12 , "Captain America: Civil War", 2016, "Capitan_America_CivilWar"))
    Peliculas.push(new pelicula(18,13 , "Doctor Strange", 2016, "Dr_Strange"))
    Peliculas.push(new pelicula(12,14 , "Guardians of the Galaxy Vol. 2", 2017, "guardians-of-the-galaxy-vol2"))
    Peliculas.push(new pelicula(19,15 , "Spider-Man: Homecoming", 2017, "Spider_Man_Homecoming"))
    Peliculas.push(new pelicula(21,16 , "Thor: Ragnarok", 2017, "Thor_Ragnarok"))
    Peliculas.push(new pelicula(17,17 , "Black Panther", 2018, "Black_Panther"))
    Peliculas.push(new pelicula(22,18 , "Avengers: Infinity War", 2018, "Avengers_Infinity_War"))
    Peliculas.push(new pelicula(20,19 , "Ant-Man and the Wasp", 2018, "Ant_Man_y_la_Avispa"))
    Peliculas.push(new pelicula(1,20 , "Captain Marvel", 2019, "captain_marvel"))
    Peliculas.push(new pelicula(23,21 , "Avengers: Endgame", 2019, "avengers_endgame"))
    Peliculas.push(new pelicula(26,22 , "Spider-Man: Far From Home", 2019, "Spider_Man_Lejos_de_casa"))
}
pelisFaseTres()
function pelisFaseCuatro() {
    Peliculas.push(new pelicula(24,23 , "WandaVision", 2021, "WandaVision"))
    Peliculas.push(new pelicula(25,24 , "The Falcon and the Winter Soldier", 2021, "Falcon_and_the_WinterSoldier"))
    Peliculas.push(new pelicula(27,25 , "Loki", 2021, "Loki"))
    Peliculas.push(new pelicula(16,26 , "Black Widow", 2021, "black_widow"))
    Peliculas.push(new pelicula(28,27 , "What If...?", 2021, "What_if"))
    Peliculas.push(new pelicula(31,28 , "Shang-Chi and the Legend of the Ten Rings", 2021, "Shang_Chi"))
    Peliculas.push(new pelicula(30,29 , "Eternals", 2021, "Eternals"))
    Peliculas.push(new pelicula(32,30 , "Hawkeye", 2021, "hawkeye"))
    Peliculas.push(new pelicula(29,31 , "Spider-Man: No Way Home", 2021, "Spider_Man_No_Way_Home"))
    Peliculas.push(new pelicula(34,32 , "Moon Knight", 2022, "Moon_Night"))
    Peliculas.push(new pelicula(33,33 , "Doctor Strange in the Multiverse of Madness", 2022, "Doctor_Strange_en_el_multiverso_de_la_locura"))
    Peliculas.push(new pelicula(35,34 , "Ms. Marvel", 2022, "ms_marvel"))
    Peliculas.push(new pelicula(36,35 , "Thor: Love and Thunder", 2022, "Thor_Love_and_Thunder"))
}
pelisFaseCuatro()