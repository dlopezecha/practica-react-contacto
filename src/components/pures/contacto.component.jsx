import React, { useState }from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';

const ContactoComponent = ({ contacto }) => {

    const [estado, setestado] = useState(contacto.connected);

    /**
     * Función para cambiar estados del contacto
     */
    const fnCambiarEstado = () => {
        setestado(!estado);
    };

    return (
        <div>
            <p>
                Nombre: { contacto.name }
            </p>
            <p>
                Apellido: { contacto.lastname }
            </p>
            <p>
                Email: { contacto.email }
            </p>
            <p>
                Contacto { estado ? "En Linea" : "No Disponible" }
            </p>
            <button onClick={fnCambiarEstado}>Cambiar Estado</button>
        </div>
    );
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ContactoComponent;
