import React, { useState } from 'react';
import { useAppContext } from '../Context/Context';
import "./Checkout.css";

const Checkout = () => {

    const { crearOrden } = useAppContext();

    const [userData, setUserData] = useState({});

    const handleChange = (e) => {
        e.preventDefault();
        switch (e.target.id) {
            case "nombre":
                setUserData({
                    ...userData,
                    nombre: e.target.value
                });
                break;
            case "telefono":
                setUserData({
                    ...userData,
                    telefono: e.target.value
                });
                break;
            case "mail":
                setUserData({
                    ...userData,
                    mail: e.target.value
                });
                break;
            default:
                break;
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        crearOrden(userData);
        setUserData({});
        document.getElementById("nombre").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("mail").value = "";
        // Te queda como tarea poner como obligatorio que no se pueda hacer submit hasta que los 3 campos estén correctamente cargados
    };

    return (
        <div>
            <p>
                Checkout, agregar estilos formulario y borrar esta etiqueta P
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre completo:</label>
                <input type="text" id="nombre" name="nombre" onChange={handleChange} />
                <label htmlFor="telefono">Número de teléfono:</label>
                <input type="number" id="telefono" name="telefono" onChange={handleChange} />
                <label htmlFor="mail">Dirección de correo:</label>
                <input type="text" id="mail" name="mail" onChange={handleChange} />
                <input type="submit" value="Crear orden" />
            </form>
        </div>
    )
}

export default Checkout;