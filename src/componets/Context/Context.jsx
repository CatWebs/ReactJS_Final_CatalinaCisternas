import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

// Uso de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBiwC_RGyLQx1g24bIJos9tBvWmj6-vqnU",
    authDomain: "cat-cisternas-react.firebaseapp.com",
    projectId: "cat-cisternas-react",
    storageBucket: "cat-cisternas-react.appspot.com",
    messagingSenderId: "777514656221",
    appId: "1:777514656221:web:433c0258588f9f5f3e1634"
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
    const [items, setItems] = useState([])
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotalCarrito, setCantidadTotalCarrito] = useState(0);

    // Cargar Data
    function cargarData(categoria) {
        if (productos.length > 0) {
            if (categoria) {
                setItems(productos.filter((el) => el.tipo === categoria));
            } else {
                setItems(productos);
            };
        } else {
            getDocs(productsCollection).then(snapshot => {
                let arrayProductos = snapshot.docs.map(el => el.data());
                setProductos(arrayProductos);
                if (categoria) {
                    setItems(arrayProductos.filter((el) => el.tipo === categoria));
                } else {
                    setItems(arrayProductos)
                }
            }).catch(err => console.error(err));
        }
    };

    // Agregar producto al carrito
    function agregarAlCarrito(id, contador) {
        const carritoAuxiliar = [...carrito];
        const productoAAgregar = productos.find(el => el.id === id);

        // Filtrado
        if (carritoAuxiliar.some(el => el.id === id)) {
            const productoAAumentar = carritoAuxiliar.find(el => el.id === id)
            productoAAumentar.cantidad += contador;

            setTotal(total + productoAAumentar.precio * contador);

            setCantidadTotalCarrito(cantidadTotalCarrito + contador);

        } else {
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
    function crearOrden(userData) {

        const { nombre, telefono, mail } = userData;

        const nuevaOrden = {
            nombre,
            telefono,
            mail,
            productos: carrito,
            total: total
        };

        addDoc(ordersCollection, nuevaOrden).then(response => {
            Swal.fire({
                title: "Listo",
                text: `Tu orden se ha generado correctamente con el id ${response.id}`,
                icon: "success"
            });
            setTotal(0);
            setCantidadTotalCarrito(0);
            setCarrito([]);
        }).catch(err => {
            alert("Algo salió mal, intente más tarde");
            console.error(err);
        });
    }

     // Quitar del carrito
     function quitarDelCarrito(id, precio, cantidad) {
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
                setCantidadTotalCarrito(cantidadTotalCarrito - cantidad)
                setTotal(total - (precio * cantidad))

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

    function vaciarCarrito() {
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
                setTotal(0);
                setCantidadTotalCarrito(0);
                setCarrito([]);
                Swal.fire({
                    title: "Carrito Eliminado",
                    text: "Se eliminaron todos los productos de tu carrito",
                    icon: "success"
                });
            }
        });
    }

    return (
        <AppContext.Provider value={{ cantidadTotalCarrito, total, productos, setProductos, items, carrito, agregarAlCarrito, cargarData, crearOrden, quitarDelCarrito, vaciarCarrito }}>
            {props.children}
        </AppContext.Provider>
    )
}
    