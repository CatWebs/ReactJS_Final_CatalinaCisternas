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
    };

    return (
        <div className='container-formulario'>
            <h1>
                Completa tus datos para terminar con la compra!
            </h1>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label className="formLabel" htmlFor="nombre">Nombre completo:
                        <input placeholder="Escribe tu nombre" className="formInput" type="text" id="nombre" name="nombre" onChange={handleChange} required />
                    </label>
                    
                    <label className="formLabel" htmlFor="telefono">Número de teléfono:
                        <input placeholder="912345678" className="formInput" type="tel" id="telefono" name="telefono" pattern="9[0-9]{8}" onChange={handleChange} required />
                    </label>
                    <label className="formLabel" htmlFor="mail">Dirección de correo:
                        <input placeholder="Escribe tu email, ejemplo: nombre@email.com" className="formInput" type="text" id="mail" name="mail" onChange={handleChange} required />
                    </label>
                    <input className="botonSubmit" type="submit" value="Crear orden" />
                </form>
            </div>
            <div className='banner'></div>
        </div>
    )
}

export default Checkout;