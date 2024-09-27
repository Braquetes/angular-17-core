import { Roles } from "./roles";

export interface UserInfo {
    email:    string;
    usuario: string;
    persona:  Persona;
    modulos:  Roles[];
}

interface Persona {
    nombres:          string;
    apellido_paterno: string;
    apellido_materno: string;
}
