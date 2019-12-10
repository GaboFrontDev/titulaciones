import documento from '../interfaces/documento.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import profesor from '../interfaces/profesor.interface';

export default class formulario {
    documento: documento;

    documentoForm: FormGroup
    profesores: profesor[];
    constructor() {
        this.documento = {
            calificacion: "",
            carrera: "",
            modalidad: "",
            opcion: "",
            trabajo: "",
            fecha: "",
            profesores: [],
            alumno: {
                carrera: "",
                nombre: "",
                titulo: ""
            },
        }
        this.documentoForm = new FormGroup({
            alumno: new FormGroup({
                carrera: new FormControl(this.documento.alumno.carrera, { validators: [Validators.required] }),
                nombre: new FormControl(this.documento.alumno.nombre, { validators: [Validators.required] }),
                titulo: new FormControl(this.documento.alumno.titulo, { validators: [Validators.required] }),
            }),
            fecha: new FormControl(this.documento.fecha, [Validators.required]),
            calificacion: new FormControl(this.documento.calificacion, [Validators.required]),
            modalidad: new FormControl(this.documento.modalidad, [Validators.required]),
            opcion: new FormControl(this.documento.opcion, [Validators.required]),
            trabajo: new FormControl(this.documento.trabajo, [Validators.required]),
            profesores: new FormControl(this.documento.profesores, [Validators.required]),
        })

        this.profesores = [
            { nombre: "Profesor Profesor1", id: 1, imagen_firma: "" },
            { nombre: "Profesor Profesor2", id: 2, imagen_firma: "" },
            { nombre: "Profesor Profesor3", id: 3, imagen_firma: "" },
            { nombre: "Profesor Profesor4", id: 4, imagen_firma: "" },
        ]
    }

    get documentoValido(): boolean {
        let valido = false
        Object.keys(this.documento).forEach(campo =>
            valido = !!this.documento[campo]
        )
        return valido
    }
}