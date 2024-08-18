import { createContext, useContext, useState} from "react";
import fetchData from "../../fetchData";
//import Swal from "sweetalert2";

{/*import { initializeApp } from "firebase/app";*/}
{/*import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";*/}

// Uso de Firebase
/*const firebaseConfig = {
    apiKey: "AIzaSyAM3Xfb9GWV1oA6Mbb72gCLpKU4bgiTZp0",
    authDomain: "productos-cat-cisternas.firebaseapp.com",
    projectId: "productos-cat-cisternas",
    storageBucket: "productos-cat-cisternas.appspot.com",
    messagingSenderId: "1074581011662",
    appId: "1:1074581011662:web:f709f074832784251c649f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollection = collection(db, "productos");
const ordersCollection = collection(db, "ordenes")*/


// Uso de Context



/*        getDocs(productsCollection).then(snapshot => {
            let arrayProductos = snapshot.docs.map(el => el.data());
            setProductos(arrayProductos);
        }).catch(err => console.error(err));
    }*/

    //Debe ser reemplazada por la de arriba
        /*function cargarData() {
            fetchData()
            .then(response => {
              setProductos(response);
            })
            .catch(err => console.error(err));
        };*/    


//agregarAlCarrito(id)
    /*function agregarAlCarrito(id) {
        let carritoAuxiliar = [];
        const productoAAgregar = productos.find(el => el.id === id);
        carritoAuxiliar.push(productoAAgregar);
        setCarrito(carritoAuxiliar);
        console.log(carrito)
    }*/
    

    ////// NUEVO CODIGO A PROBAR
    /*
    

    const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];
    const [carrito, setCarrito] = useState(carritoInicial);
    
        const agregarAlCarrito = (item, cantidad) => {
            const itemAgregado = { ...item, cantidad };
    
            const nuevoCarrito = [...carrito];
            const enCarrito = nuevoCarrito.find((el) => el.id === itemAgregado.id);
    
            if (enCarrito) {
                enCarrito.cantidad += cantidad;
            } else {
                nuevoCarrito.push(itemAgregado);
            }
            setCarrito(nuevoCarrito);
        };
    
        const cantidadCarrito = () => {
            return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
        };
    
        const precioFinal = () => {
            return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
        };
    
        const vaciarCarrito = () => {
            setCarrito([]);
        };
    
        useEffect(() => {
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }, [carrito])*/
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











































    
    /*
    function crearOrden(){
        if (carrito.length > 0) {
            const nuevaOrden = {
                nombre: "Catalina Cisternas",
                telefono: 98712532,
                mail: "cata@coder.com",
                productos: carrito,
            };

            addDoc(ordersCollection, nuevaOrden).then(response => {
                console.log("Orden creada correctamente con el id: " + response.id);
                setCarrito([]);
            }).catch(err => {
                alert("Algo salió mal, intente más tarde");
                console.error(err);
            });
        } else {
            Swal.fire({
                title: "",
                text: "",
                icon: "question"
            });
        }
    }*/


    const AppContext = createContext();

    export const useAppContext = () => useContext(AppContext);

    export const ContextProvider = (props) => {
        const [productos, setProductos] = useState([]);
        const [carrito, setCarrito] = useState([]);


        function cargarData() {
            fetchData()
            .then(response => {
            setProductos(response);
            })
            .catch(err => console.error(err));
        };

        function agregarAlCarrito(id) {
            const carritoAuxiliar = [...carrito];
            const productoAAgregar = productos.find(el => el.id === id);
            carritoAuxiliar.push(productoAAgregar);
            setCarrito(carritoAuxiliar);
        }
    
    
 
    return(
        <AppContext.Provider value={{productos,setProductos,carrito,agregarAlCarrito, cargarData}}> 
            {props.children}
        </AppContext.Provider>
    )
}