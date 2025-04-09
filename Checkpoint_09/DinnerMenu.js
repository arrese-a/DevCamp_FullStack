const desayuno = [
    {
        type: "bebidas calientes",
        options: [
            {num: "1", name: "Cafe", price: 1.70},
            {num: "2", name: "Chocolate", price: 1.50},
            {num: "3", name: "Te-matcha", price: 1.60},
        ]
    },
    {
        type: "zumos",
        options: [
            {num: "1", name: "Naranja", price: 3.00},
            {num: "2", name: "Frutos rojos", price: 4.00},
            {num: "3", name: "Melocotón", price: 5.50},
        ]
    },
    {
        type: "tostadas",
        options: [
            {num: "1", name: "Jamon y tomate", price: 7.10},
            {num: "2", name: "Mantequilla", price: 4.30},
            {num: "3", name: "Crema de cacahuete y platano", price: 7.50},
        ]
    }
];

const comida = [
    {
        type: "primeros",
        options: [
            {num: "1", name: "Alubias", price: 12.70},
            {num: "2", name: "Pasta bolognesa", price: 11.60},
            {num: "3", name: "Ensalada Mixta", price: 10.80},
        ]
    },
    {
        type: "segundos",
        options: [
            {num: "1", name: "Entrecot", price: 16.25},
            {num: "2", name: "Solomillo", price: 13.75},
            {num: "3", name: "Merluza", price: 15.50},
        ]
    },
    {
        type: "postre",
        options: [
            {num: "1", name: "Tarta de queso", price: 6.7},
            {num: "2", name: "Tiramisu", price: 6.3},
            {num: "3", name: "Helado", price: 3.00},
        ]
    }
];

const cena = [
    {
        type: "primeros",
        options: [
            {num: "1", name: "Pisto", price: 10.70},
            {num: "2", name: "Crema de calabaza", price: 9.60},
            {num: "3", name: "Arroz", price: 10.80},
        ]
    },
    {
        type: "segundos",
        options: [
            {num: "1", name: "Pollo asado", price: 10.25},
            {num: "2", name: "Lubina", price: 15.75},
            {num: "3", name: "Carne guisada", price: 9.50},
        ]
    },
    {
        type: "postre",
        options: [
            {num: "1", name: "Yogur", price: 3.00},
            {num: "2", name: "Tarta de chocolate", price: 6.5},
            {num: "3", name: "Sorbete de limon", price: 4.00},
        ]
    }
];

function getHora(){
    var hora = prompt('¿A que hora hora quieres el menu? (formato 24 horas, eg. 14:30)');
    let regex = /^([0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;

    while (!regex.test(hora)) {
        var hora = prompt('La hora introducida no es válida.\n Por favor, introduzca una hora válida (formato 24 horas, eg. 14:30)');
    }
    const [horas, ] = hora.split(":").map(Number);

    if (horas < 6 || horas >= 23){
        var hora = prompt('Solo se ofrecen menus de 6:00 a 23:00.\n Por favor, introduzca otra hora (formato 24 horas, eg. 14:30)');
    }
    if (horas >= 6 && horas < 12) return desayuno;
    if (horas >= 12 && horas < 18) return comida;
    return cena
}

function selectMenu(menu){
    var platosSeleccionados = [];

    for (let i = 0; i<3; i++){
        tipoPlato= menu[i];
        var opciones = [];

        tipoPlato.options.forEach(plato => {
            opciones.push((`\n ${plato.num}. ${plato.name} ........ ${plato.price} €`));
        });

        var printText = `Seleccione ${tipoPlato.type}:\n ${opciones.join("")}`;
        var errorText = "";
        let repetir = true;
        while(repetir == true){
            let plato =prompt(errorText + printText);
            var op = 1;
            for (let opcion of tipoPlato.options) {
                if (opcion.name.toLowerCase() === plato.toLowerCase() || opcion.num === plato ) {
                    repetir = false;
                    platosSeleccionados.push(plato);
                }
                op += 1;
            }
            errorText = ("El plato introducido es incorrecto, por favor ponga el nombre o el número del plato correctamente \n");
        }
    };
    return(platosSeleccionados);
};

function printRecibo(tipoMenu, platosSeleccionados){
    var strRecibo = 'Recibo: \n ____________________ \n';
    var total = 0;
    for(let i = 0; i<3; i++){
            for (let opcion of tipoMenu[i].options) {
                if (opcion.name.toLowerCase() === platosSeleccionados[i].toLowerCase() || opcion.num === platosSeleccionados[i]) {
                    total += opcion.price;
                    strRecibo+=`${opcion.name}........${opcion.price} €\n`;
                }
            }
    }
    strRecibo += `____________________ \n TOTAL ........ ${total} €`;
    return strRecibo;
}



let tipoMenu = getHora() 
let eleccion= selectMenu(tipoMenu);
alert(printRecibo(tipoMenu, eleccion));
