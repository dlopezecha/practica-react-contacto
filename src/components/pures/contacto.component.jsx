import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';

const ContactoComponent = ({ contacto }) => {
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
                El contacto está: { contacto.connected ? "Conectado" : "Desconectado" }
            </p>
        </div>
    );
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ContactoComponent;
