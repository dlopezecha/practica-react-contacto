export class Contacto {
    name = "";
    lastname = "";
    email = "";
    connected = false;

    /**
     * Clase Contacto
     * @param {String} name Nombre
     * @param {String} lastname Apellido
     * @param {String} email Correo Electrónico
     * @param {Boolean} connected Conectado
     */
    constructor(name, lastname, email, connected)
    {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.connected = connected;
    }
}