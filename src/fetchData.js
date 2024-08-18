const productos = [
    {
        id: 1,
        nombre: "Algodón Color Calipso",
        precio: "1400",
        descripcion: "Con su característica semi suave y perteneciente a la categoría de Hilos de Verano, este ovillo te brinda una composición 100% algodón, ideal para tus creaciones. Con un gramaje de 100 gramos y un grosor medio, sus 3 hebras se entrelazan con elegancia, ofreciéndote alrededor de 330 metros para tejer tus visiones. Utiliza agujas de tamaño N° 2-3.5 y dale forma a tus ideas con ALGODÓN COLOR.",
        imagen: "../img/algodon/algodon-color-calipso.jpg",
        tipo: "algodon",
        stock: 10
    },
    {
        id: 2,
        nombre: "Algodón Color Café Moro",
        precio: "1250",
        descripcion: "Con su característica semi suave y perteneciente a la categoría de Hilos de Verano, este ovillo te brinda una composición 100% algodón, ideal para tus creaciones. Con un gramaje de 100 gramos y un grosor medio, sus 3 hebras se entrelazan con elegancia, ofreciéndote alrededor de 330 metros para tejer tus visiones. Utiliza agujas de tamaño N° 2-3.5 y dale forma a tus ideas con ALGODÓN COLOR.",
        imagen: "../img/algodon/algodon-color-cafe-moro.jpg",
        tipo: "algodon",
        stock: 10
    },
    {
        id: 3,
        nombre: "Algodón Color Esmeralda",
        precio: "1400",
        descripcion: "Con su característica semi suave y perteneciente a la categoría de Hilos de Verano, este ovillo te brinda una composición 100% algodón, ideal para tus creaciones. Con un gramaje de 100 gramos y un grosor medio, sus 3 hebras se entrelazan con elegancia, ofreciéndote alrededor de 330 metros para tejer tus visiones. Utiliza agujas de tamaño N° 2-3.5 y dale forma a tus ideas con ALGODÓN COLOR.",
        imagen: "../img/algodon/algodon-color-esmeralda.jpg",
        tipo: "algodon",
        stock: 10
    },
    {
        id: 4,
        nombre: "Algodón Color Negro",
        precio: "1000",
        descripcion: "Con su característica semi suave y perteneciente a la categoría de Hilos de Verano, este ovillo te brinda una composición 100% algodón, ideal para tus creaciones. Con un gramaje de 100 gramos y un grosor medio, sus 3 hebras se entrelazan con elegancia, ofreciéndote alrededor de 330 metros para tejer tus visiones. Utiliza agujas de tamaño N° 2-3.5 y dale forma a tus ideas con ALGODÓN COLOR.",
        imagen: "../img/algodon/algodon-color-negro.jpg",
        tipo: "algodon",
        stock: 10
    },
    {
        id: 5,
        nombre: "Algodón Color Azafrán",
        precio: "1250",
        descripcion: "Con su característica semi suave y perteneciente a la categoría de Hilos de Verano, este ovillo te brinda una composición 100% algodón, ideal para tus creaciones. Con un gramaje de 100 gramos y un grosor medio, sus 3 hebras se entrelazan con elegancia, ofreciéndote alrededor de 330 metros para tejer tus visiones. Utiliza agujas de tamaño N° 2-3.5 y dale forma a tus ideas con ALGODÓN COLOR.",
        imagen: "../img/algodon/algodon-color-azafran.jpg",
        tipo: "algodon",
        stock: 10
    },
    {
        id: 6,
        nombre: "Algodón Color Perla",
        precio: "1250",
        descripcion: "Con su característica semi suave y perteneciente a la categoría de Hilos de Verano, este ovillo te brinda una composición 100% algodón, ideal para tus creaciones. Con un gramaje de 100 gramos y un grosor medio, sus 3 hebras se entrelazan con elegancia, ofreciéndote alrededor de 330 metros para tejer tus visiones. Utiliza agujas de tamaño N° 2-3.5 y dale forma a tus ideas con ALGODÓN COLOR.",
        imagen: "../img/algodon/algodon-color-perla.jpg",
        tipo: "algodon",
        stock: 10
    },
    {
        id: 7,
        nombre: "Algodón Color Rubí",
        precio: "1400",
        descripcion: "Con su característica semi suave y perteneciente a la categoría de Hilos de Verano, este ovillo te brinda una composición 100% algodón, ideal para tus creaciones. Con un gramaje de 100 gramos y un grosor medio, sus 3 hebras se entrelazan con elegancia, ofreciéndote alrededor de 330 metros para tejer tus visiones. Utiliza agujas de tamaño N° 2-3.5 y dale forma a tus ideas con ALGODÓN COLOR.",
        imagen: "../img/algodon/algodon-color-rubi.jpg",
        tipo: "algodon",
        stock: 10
    },
    {
        id: 8,
        nombre: "Algodón Color Verde Musgo",
        precio: "1400",
        descripcion: "Con su característica semi suave y perteneciente a la categoría de Hilos de Verano, este ovillo te brinda una composición 100% algodón, ideal para tus creaciones. Con un gramaje de 100 gramos y un grosor medio, sus 3 hebras se entrelazan con elegancia, ofreciéndote alrededor de 330 metros para tejer tus visiones. Utiliza agujas de tamaño N° 2-3.5 y dale forma a tus ideas con ALGODÓN COLOR.",
        imagen: "../img/algodon/algodon-color-verde-musgo.jpg",
        tipo: "algodon",
        stock: 10
    },
    {
        id: 9,
        nombre: "Algodón Color Verde Pino",
        precio: "1250",
        descripcion: "Con su característica semi suave y perteneciente a la categoría de Hilos de Verano, este ovillo te brinda una composición 100% algodón, ideal para tus creaciones. Con un gramaje de 100 gramos y un grosor medio, sus 3 hebras se entrelazan con elegancia, ofreciéndote alrededor de 330 metros para tejer tus visiones. Utiliza agujas de tamaño N° 2-3.5 y dale forma a tus ideas con ALGODÓN COLOR.",
        imagen: "../img/algodon/algodon-color-verde-pino.jpg",
        tipo: "algodon",
        stock: 10
    },
    {
        id: 10,
        nombre: "Algodón Color Violeta",
        precio: "1400",
        descripcion: "Con su característica semi suave y perteneciente a la categoría de Hilos de Verano, este ovillo te brinda una composición 100% algodón, ideal para tus creaciones. Con un gramaje de 100 gramos y un grosor medio, sus 3 hebras se entrelazan con elegancia, ofreciéndote alrededor de 330 metros para tejer tus visiones. Utiliza agujas de tamaño N° 2-3.5 y dale forma a tus ideas con ALGODÓN COLOR.",
        imagen: "../img/algodon/algodon-color-violeta.jpg",
        tipo: "algodon",
        stock: 10
    },
    {
        id: 11,
        nombre: "Acrilico IBIS Calipso",
        precio: "1390",
        descripcion: "Composición 100% acrílico para una suavidad inigualable. Con un gramaje de 100 gramos y un grosor fino, cuenta con 2 hebras que se entrelazan delicadamente. Con aproximadamente 375 metros de longitud, este hilo versátil se adapta a agujas de tamaño N° 2-3. Teje tus sueños de verano con IBIS.",
        imagen: "../img/acrilico/ibis-calipso.jpg",
        tipo: "acrilico",
        stock: 10
    },
    {
        id: 12,
        nombre: "Acrilico IBIS Coral",
        precio: "1450",
        descripcion: "Composición 100% acrílico para una suavidad inigualable. Con un gramaje de 100 gramos y un grosor fino, cuenta con 2 hebras que se entrelazan delicadamente. Con aproximadamente 375 metros de longitud, este hilo versátil se adapta a agujas de tamaño N° 2-3. Teje tus sueños de verano con IBIS.",
        imagen: "../img/acrilico/ibis-coral.jpg",
        tipo: "acrilico",
        stock: 10
    },
    {
        id: 13,
        nombre: "Acrilico IBIS Crudo",
        precio: "1200",
        descripcion: "Composición 100% acrílico para una suavidad inigualable. Con un gramaje de 100 gramos y un grosor fino, cuenta con 2 hebras que se entrelazan delicadamente. Con aproximadamente 375 metros de longitud, este hilo versátil se adapta a agujas de tamaño N° 2-3. Teje tus sueños de verano con IBIS.",
        imagen: "../img/acrilico/ibis-crudo.jpg",
        tipo: "acrilico",
        stock: 10
    },
    {
        id: 14,
        nombre: "Acrilico IBIS Hibisco",
        precio: "1290",
        descripcion: "Composición 100% acrílico para una suavidad inigualable. Con un gramaje de 100 gramos y un grosor fino, cuenta con 2 hebras que se entrelazan delicadamente. Con aproximadamente 375 metros de longitud, este hilo versátil se adapta a agujas de tamaño N° 2-3. Teje tus sueños de verano con IBIS.",
        imagen: "../img/acrilico/ibis-hibisco.jpg",
        tipo: "acrilico",
        stock: 10
    },
    {
        id: 15,
        nombre: "Acrilico IBIS Mar Egeo",
        precio: "1390",
        descripcion: "Composición 100% acrílico para una suavidad inigualable. Con un gramaje de 100 gramos y un grosor fino, cuenta con 2 hebras que se entrelazan delicadamente. Con aproximadamente 375 metros de longitud, este hilo versátil se adapta a agujas de tamaño N° 2-3. Teje tus sueños de verano con IBIS.",
        imagen: "../img/acrilico/ibis-mar-egeo.jpg",
        tipo: "acrilico",
        stock: 10
    },
    {
        id: 16,
        nombre: "Acrilico IBIS Mostaza",
        precio: "1400",
        descripcion: "Composición 100% acrílico para una suavidad inigualable. Con un gramaje de 100 gramos y un grosor fino, cuenta con 2 hebras que se entrelazan delicadamente. Con aproximadamente 375 metros de longitud, este hilo versátil se adapta a agujas de tamaño N° 2-3. Teje tus sueños de verano con IBIS.",
        imagen: "../img/acrilico/ibis-mostaza.jpg",
        tipo: "acrilico",
        stock: 10
    },
    {
        id: 17,
        nombre: "Acrilico IBIS Naranja",
        precio: "1200",
        descripcion: "Composición 100% acrílico para una suavidad inigualable. Con un gramaje de 100 gramos y un grosor fino, cuenta con 2 hebras que se entrelazan delicadamente. Con aproximadamente 375 metros de longitud, este hilo versátil se adapta a agujas de tamaño N° 2-3. Teje tus sueños de verano con IBIS.",
        imagen: "../img/acrilico/ibis-naranja.jpg",
        tipo: "acrilico",
        stock: 10
    },
    {
        id: 18,
        nombre: "Acrilico IBIS Pistacho",
        precio: "1350",
        descripcion: "Composición 100% acrílico para una suavidad inigualable. Con un gramaje de 100 gramos y un grosor fino, cuenta con 2 hebras que se entrelazan delicadamente. Con aproximadamente 375 metros de longitud, este hilo versátil se adapta a agujas de tamaño N° 2-3. Teje tus sueños de verano con IBIS.",
        imagen: "../img/acrilico/ibis-pistacho.jpg",
        tipo: "acrilico",
        stock: 10
    },
    {
        id: 19,
        nombre: "Acrilico IBIS Terracota",
        precio: "1090",
        descripcion: "Composición 100% acrílico para una suavidad inigualable. Con un gramaje de 100 gramos y un grosor fino, cuenta con 2 hebras que se entrelazan delicadamente. Con aproximadamente 375 metros de longitud, este hilo versátil se adapta a agujas de tamaño N° 2-3. Teje tus sueños de verano con IBIS.",
        imagen: "../img/acrilico/ibis-terracota.jpg",
        tipo: "acrilico",
        stock: 10
    },
    {
        id: 20,
        nombre: "Acrilico IBIS Uva",
        precio: "1400",
        descripcion: "Composición 100% acrílico para una suavidad inigualable. Con un gramaje de 100 gramos y un grosor fino, cuenta con 2 hebras que se entrelazan delicadamente. Con aproximadamente 375 metros de longitud, este hilo versátil se adapta a agujas de tamaño N° 2-3. Teje tus sueños de verano con IBIS.",
        imagen: "../img/acrilico/ibis-uva.jpg",
        tipo: "acrilico",
        stock: 10
    }

];

export default function fetchData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
};
