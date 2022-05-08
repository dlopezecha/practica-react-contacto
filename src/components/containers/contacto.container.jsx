import React from 'react';
import ContactoComponent from '../pures/contacto.component';
import { Contacto } from '../models/contacto.class';

const defaultContact = new Contacto("Daniel", "López", "daniel.lopez@example.com", false);

const ContactsComponent = () => {
    return (
        <div>
            <h1>Contactos:</h1>

            {/* Se pinta un contacto */}
            <ContactoComponent contacto={defaultContact}></ContactoComponent>
        </div>
    );
};

export default ContactsComponent;
