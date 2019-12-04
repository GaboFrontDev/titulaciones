import profesor from './profesor.interface'
import alumno from './alumno.interface';

export default class documento {
    fecha: string;
    profesores: profesor[]
    carrera: string;
    alumno: alumno;
    modalidad: string;
    opcion: string;
    trabajo: string;
    calificacion: string;
}