// CONSTRUCTORES DEL JUEGO
class Personaje {
    constructor(tipo, vida, ataques, objetos, inventario) {
        this.tipo = tipo;
        this.vida = vida;
        this.ataques = ataques;
        this.objetos = objetos;
        this.inventario = inventario;
    }
}

class AtaquePj {
    constructor(id, nombre, daño, critico) {
        this.id = id;
        this.nombre = nombre;
        this.daño = daño;
        this.critico = critico;
    }
}

class ObjetoPj {
    constructor(nombre, vida, daño) {
        this.nombre = nombre;
        this.vida = vida;
        this.daño = daño;
    }
}

class Monstruos {
    constructor(tipo, vida, daño) {
        this.tipo = tipo;
        this.vida = vida;
        this.daño = daño;
    }
}

//=====================================================================================================
//MAGO
const ataqueMago1 = new AtaquePj(1, "Bola de fuego", 20, 2);
const ataqueMago2 = new AtaquePj(2, "Rayo", 25, 5);
const ataqueMago3 = new AtaquePj(3, "Rayo de escarcha", 20, 2);

const ataqueMago = [ataqueMago1, ataqueMago2, ataqueMago3];

const objetoMago1 = new ObjetoPj("baston", 0, 30);
const objetoMago2 = new ObjetoPj("capa", 50, 0);
const objetoMago3 = new ObjetoPj("gorro", 20, 10);

const objMago = [objetoMago1, objetoMago2, objetoMago3];

const inventarioMago = [];

const mago = new Personaje("Mago", 100, ataqueMago, objMago, inventarioMago);

//=====================================================================================================
//GUERRERO
const ataqueGuerrero1 = new AtaquePj(1, "Filo resonante", 20, 2);
const ataqueGuerrero2 = new AtaquePj(2, "Destierro", 25, 5);
const ataqueGuerrero3 = new AtaquePj(3, "Estallido de filos", 20, 2);

const ataqueGuerrero = [ataqueGuerrero1, ataqueGuerrero2, ataqueGuerrero3];

const objetoGuerrero1 = new ObjetoPj("espada", 0, 30);
const objetoGuerrero2 = new ObjetoPj("armadura", 50, 0);
const objetoGuerrero3 = new ObjetoPj("guantes", 20, 10);

const objGuerrero = [objetoGuerrero1, objetoGuerrero2, objetoGuerrero3];

const inventarioGuerrero = [];

const guerrero = new Personaje("Guerrero", 100, ataqueGuerrero, objGuerrero, inventarioGuerrero);

//=====================================================================================================
//ARQUERA
const ataqueArquera1 = new AtaquePj(1, "Flecha de cristal", 20, 2);
const ataqueArquera2 = new AtaquePj(2, "Disparo de halcon", 25, 5);
const ataqueArquera3 = new AtaquePj(3, "Flecha de fuego", 20, 2);

const ataqueArquera = [ataqueArquera1, ataqueArquera2, ataqueArquera3];

const objetoArquera1 = new ObjetoPj("arco", 0, 30);
const objetoArquera2 = new ObjetoPj("pechera", 50, 0);
const objetoArquera3 = new ObjetoPj("flecha", 20, 10);

const objArquera = [objetoArquera1, objetoArquera2, objetoArquera3];

const inventarioArquera = [];

const arquera = new Personaje("Arquera", 100, ataqueArquera, objArquera, inventarioArquera);

//=====================================================================================================
//MONSTRUOS
const orco = new Monstruos("Orco", 70, 30);
const espiritu = new Monstruos("Espiritu", 40, 15);
const huargo = new Monstruos("Huargo", 60, 20);
const troll = new Monstruos("Troll", 90, 40);
const balrog = new Monstruos("Balrog", 120, 55);

const monstruosArray = [espiritu, huargo, orco, troll, balrog];

//=====================================================================================================
//HISTORIA
let divCajaTexto = document.getElementById('divTexto');

divCajaTexto.innerText = `La montaña maldita.
Muchos años atrás en Carnicabunstein ,un pueblo cercano a la gran montaña, un grupo de magos forjo una daga mágica. Esta daga le otorga a su portador la habilidad de controlar a los dragones. El pueblo entro en guerra tras guerra ya que todos querían poseer el poder otorgado por el filoso tesoro. Tal fue el daño causado por la daga que sus creadores tomaron la drástica decisión de perderla en las catacumbas de la montaña y sellar la entrada con una maldición.
Cientos de años pasaron y una gran amenaza se fue haciendo más fuerte en el continente. Los ciudadanos de Carnicabunstein necesitan nuevamente la ayuda de los dragones, pero para poder controlarlos la daga deberán recuperar.Estas listo para encontrar la daga y enfrentarte a las maldiciones de los antiguos magos?`;

//=====================================================================================================
//VARIABLES
const vidaPj = document.getElementById('vidaPj');
const vidaMonstruo = document.getElementById('vidaMonstruo');
/* let btnmago;
let btnguerrero;
let btnarquera; */
let enemigo;
let objeto;
let indicador;
let pjJSON;
let critico = false;
let seleccionPersonaje;
const ataque1 = AtaquePj[0];
const ataque2 = AtaquePj[1];
const ataque3 = AtaquePj[2];


//=====================================================================================================
//FUNCIONES
function selecMago() {
    seleccionPersonaje = mago;
    let pjJSON = JSON.stringify(mago);
    localStorage.setItem("Personaje seleccionado", pjJSON);
    console.log(mago);
    return seleccionPersonaje;
}

function selecguerrero() {
    seleccionPersonaje = guerrero;
    let pjJSON = JSON.stringify(guerrero);
    localStorage.setItem("Personaje seleccionado", pjJSON);
    localStorage.setItem("Personaje seleccionado", pjJSON);
    console.log(guerrero);
    return seleccionPersonaje;
}

function selecarquera() {
    seleccionPersonaje = arquera;
    let pjJSON = JSON.stringify(arquera);
    localStorage.setItem("Personaje seleccionado", pjJSON);
    localStorage.setItem("Personaje seleccionado", pjJSON);
    console.log(arquera);
    }

function dropObjetosArray(seleccionPersonaje) {
    seleccionPersonaje.objetos[Math.floor(Math.random() * seleccionPersonaje.objetos.length)];
    return seleccionPersonaje.objetos
}

function enemigoDecision(Monstruos, Personaje) {
    if (Monstruos.vida <= 0) {
        divCajaTexto.innerHTML = "Has vencido a tu enemigo. Descansa un poco, nuevos peligros te esperan";
    } else if (Monstruos.vida > 0 && Monstruos.vida < 16) {
        return Monstruos.vida += 15;
    } else {
        return Personaje.vida -= Monstruos.daño;
    }
}

function pocima(Personaje) {
    Personaje.vida += 25;
    enemigoDecision(Monstruos, Personaje);
    return Personaje.vida;
}

function ataque01(ataque1) {
    if (ataque1.critico) {
        const indicador = Math.ceil(Math.random() * ataque1.critico);
        return indicador;
    }
    if (ataque1.critico === indicador) {
        return critico = true;
    }
    if (critico = true) {
        return ataque1.daño = ataque1.daño * 1.5;
    }
    if (!critico) {
        divCajaTexto.innerText = `Has atacado con ${ataque1.nombre} y la vida del ${Monstruos.tipo} a bajado a ${Monstruos.vida}`;
    } else {
        divCajaTexto.innerText = `Has atacado con ${ataque1.nombre} y realizaste un DAÑO CRITICO, la vida del ${Monstruos.tipo} a bajado a ${Monstruos.vida}`;
    }
    enemigoDecision(Monstruos, Personaje);
}

function ataque02(ataque2) {
    if (ataque2.critico) {
        const indicador = Math.ceil(Math.random() * ataque2.critico);
        return indicador;
    }
    if (ataque2.critico === indicador) {
        return critico = true;
    }
    if (critico = true) {
        return ataque2.daño = ataque2.daño * 1.5;
    }
    if (!critico) {
        divCajaTexto.innerText = `Has atacado con ${ataque2.nombre} y la vida del ${Monstruos.tipo} a bajado a ${Monstruos.vida}`;
    } else {
        divCajaTexto.innerText = `Has atacado con ${ataque2.nombre} y realizaste un DAÑO CRITICO, la vida del ${Monstruos.tipo} a bajado a ${Monstruos.vida}`;
    }
    enemigoDecision(Monstruos, Personaje);
}

function ataque03(ataque3) {
    if (ataque3.critico) {
        const indicador = Math.ceil(Math.random() * ataque3.critico);
        return indicador;
    }
    if (ataque3.critico === indicador) {
        return critico = true;
    }
    if (critico = true) {
        return ataque3.daño = ataque3.daño * 1.5;
    }
    if (!critico) {
        divCajaTexto.innerText = `Has atacado con ${ataque3.nombre} y la vida del ${Monstruos.tipo} a bajado a ${Monstruos.vida}`;
    } else {
        divCajaTexto.innerText = `Has atacado con ${ataque3.nombre} y realizaste un DAÑO CRITICO, la vida del ${Monstruos.tipo} a bajado a ${Monstruos.vida}`;
    }
    enemigoDecision(Monstruos, Personaje);
}
function juego(seleccionPersonaje) {
    for (let i = 0; i < monstruosArray.length; i++) {
        let enemigo = monstruosArray[i];
        console.log(enemigo);
        divCajaTexto.innerHTML = `Comienzas a adentrarte en la montaña mientras bajas un empinado sendero. Oyes unos horribles gruñidos. Un ${enemigo.tipo} aparece corriendo hacia ti, piensa rapido joven ${seleccionPersonaje.tipo}!`;
        /*         
        while (seleccionPersonaje.vida > 0 && enemigo.vida > 0) {
                    ===========??================
                    ACA QUIERO IMPLEMENTAR LOS BOTONES DE ATAQUE, PERO NO SE COMO HACERLO
                    PROBE DE VARIAS MANERAS Y NO SE ME OCURRIO COMO.
                    LA IDEA ES IR PRECIONANDO BOTONES HASTA QUE SE CUMPLA LA CONDICION DEL WHILE
                    ANTES LO HACIA MEDIANTE PROMPT Y FUNCIONABA PERFECTA LA FUNCION
                    CON LA IMPLEMENTACION DE LOS BOTONES SE ME COMPLICO
                } 
        */
    }
    if (seleccionPersonaje.vida <= 0) {
        divCajaTexto.innerHTML = "Tu camino ha llegado al fin. La muerte te ha alcanzado.";
    } else {
        divCajaTexto.innerHTML = "Has vencido a tu enemigo. Descansa un poco, nuevos peligros te esperan";
        objeto = dropObjetosArray(seleccionPersonaje);
        seleccionPersonaje.inventario.push(objeto);
        const last = seleccionPersonaje.inventario[seleccionPersonaje.inventario.length - 1];
        console.log(last);
        seleccionPersonaje.vida += last.vida;
        seleccionPersonaje.daño += last.daño;
    }
}

//=====================================================================================================
//BOTONES
const btnmago = document.getElementById('mago').addEventListener("click", selecMago);
const btnguerrero = document.getElementById('guerrero').addEventListener("click", selecguerrero);
const btnarquera = document.getElementById('arquera').addEventListener("click", selecarquera);
const btnAtaque1 = document.getElementById('btnAtaque1').addEventListener("click", ataque01);
const btnAtaque2 = document.getElementById('btnAtaque2').addEventListener("click", ataque02);
const btnAtaque3 = document.getElementById('btnAtaque3').addEventListener("click", ataque03);
const btnPocima = document.getElementById('btnPocima').addEventListener("click", pocima);
const btnComenzar = document.getElementById('btnComenzar').addEventListener("click",juego);

//=====================================================================================================
//JUEGO
divCajaTexto.innerHTML = "Te paras frente a la entrada de la montaña. Dejas de oir el canto de las aves, una ultima brisa acaricia tu cara. Te das vuelta para ver por ultima vez la luz del sol y pronuncias el hechizo que abre el paso. Enciendes tu antorcha y te adentras a lo desconocido. Lo que suceda a continuacion depende solo de ti y de las decisiones que tomes. Mantente alerta, la muerte acecha en la oscuridad."

/* if (Personaje === mago) {
    juego(mago);
} else if (Personaje === guerrero) {
    juego(guerrero);
} else {
    juego(arquera);
} */