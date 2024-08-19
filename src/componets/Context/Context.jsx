import { createContext, useContext, useState} from "react";
//import fetchData from "../../fetchData";
import Swal from "sweetalert2";

/*
PENDIENTES:
1. Menú -> Filtro por productos
OK 2. No repetir objetos en el carrito
3. Que cada item tenga su propia cantidad y que el contador dependa de cada item (por ahora al agregar una unidad se le agrega a todos los items)
4. Sumar los precios totales
5. Si es posible hacer formulario
*/

import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

// Uso de Firebase
const firebaseConfig = {
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
const ordersCollection = collection(db, "ordenes")


// Uso de Context

    const AppContext = createContext();

    export const useAppContext = () => useContext(AppContext);

    export const ContextProvider = (props) => {
        const [productos, setProductos] = useState([]);
        const [carrito, setCarrito] = useState([]);
        const [total, setTotal] = useState(0);
        const [cantidadTotalCarrito, setCantidadTotalCarrito] = useState(0);

        // Cargar Data
        function cargarData() {
            getDocs(productsCollection).then(snapshot => {
               let arrayProductos = snapshot.docs.map(el => el.data());
                setProductos(arrayProductos);
            }).catch(err => console.error(err));
        };

        // Agregar producto al carrito
        function agregarAlCarrito(id,contador) {
            const carritoAuxiliar = [...carrito];
            const productoAAgregar = productos.find(el => el.id === id);
            console.log(total, cantidadTotalCarrito)
            
            // Filtrado
            if(carritoAuxiliar.some(el => el.id === id)){
                console.log("hay una coincidencia") 
                const productoAAumentar = carritoAuxiliar.find(el=>el.id === id)
                productoAAumentar.cantidad += 1;

                setTotal(total + productoAAumentar.precio * productoAAumentar.cantidad);
              
                setCantidadTotalCarrito(cantidadTotalCarrito + productoAAumentar.cantidad);
                
            }else{
                productoAAgregar.cantidad = contador;
                carritoAuxiliar.push(productoAAgregar);
                setTotal(total + productoAAgregar.precio * productoAAgregar.cantidad);
                
                setCantidadTotalCarrito(cantidadTotalCarrito + productoAAgregar.cantidad);
                
            }
            // Agregado
            
            setCarrito(carritoAuxiliar);

            Swal.fire({
                title: "Éxito",
                text: `Agregaste ${productoAAgregar.nombre} a tu carrito`,
                icon: "success"
            });


        }
    
    // Crear Orden
        function crearOrden(){
        
            const nuevaOrden = {
                nombre: "Catalina Cisternas",
                telefono: 98712532,
                mail: "cata@coder.com",
                productos: carrito,
                total: total
            };

            addDoc(ordersCollection, nuevaOrden).then(response => {
                Swal.fire({
                    title: "Listo",
                    text: `Tu orden se ha generado correctamente con el id ${response.id}`,
                    icon: "success"
                });
                setCarrito([]);
            }).catch(err => {
                alert("Algo salió mal, intente más tarde");
                console.error(err);
            });
        }

    // Quitar del carrito
        function quitarDelCarrito(id) {
            Swal.fire({
                title: "Estás seguro?",
                text: "Tu producto será eliminado",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Eliminar",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    let carritoAuxiliar = [...carrito].filter(el => el.id !== id);

                    setCarrito(carritoAuxiliar);

                    Swal.fire({
                        title: "Eliminado",
                        text: "Tu producto fue removido correctamente del carrito",
                        icon: "success"
                    });
                }
            });
        }

    // Vaciar Carrito

        function vaciarCarrito(){
            Swal.fire({
                title: "Estás seguro?",
                text: "Todos los productos de tu carrito serán eliminados",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Eliminar",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    setCarrito([]);
                    Swal.fire({
                        title: "Carrito Eliminado",
                        text: "Se eliminaron todos los productos de tu carrito",
                        icon: "success"
                    });
                }
            });
        }
 
    return(
        <AppContext.Provider value={{cantidadTotalCarrito,total, productos,setProductos,carrito,agregarAlCarrito, cargarData, crearOrden, quitarDelCarrito, vaciarCarrito}}> 
            {props.children}
        </AppContext.Provider>
    )
}
    