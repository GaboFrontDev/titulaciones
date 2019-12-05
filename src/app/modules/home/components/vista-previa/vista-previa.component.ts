import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import documento from '../../interfaces/documento.interface';
import { Fechas } from './util_fechas';

@Component({
  selector: 'app-vista-previa',
  templateUrl: './vista-previa.component.html',
  styleUrls: ['./vista-previa.component.scss']
})
export class VistaPreviaComponent implements OnInit {
  @Input() set documento(value: documento) {
    this.setCuerpo(value);
    this._documento = value
  }
  get documento(): documento {
    return this._documento;
  }

  @ViewChild("texto", { static: true }) contenedorTexto: ElementRef;

  _cuerpo: string = "";
  _documento: documento;
  fechas = new Fechas();

  constructor() { }

  async ngOnInit() {
  }

  get cuerpo(): string {
    return this._cuerpo
  }
  setCuerpo(value: documento) {
    if (!value)
      return;
    const FECHA = new Date(value.fecha);
    let dia = FECHA.getMonth();
    let mes = FECHA.getDay();
    let anio = FECHA.getFullYear();
    const CU = "Centro Universitario de ciencias exactas e ingenierías"
    let PROFESORES = value.profesores.map(profesor => profesor.nombre).join();
    while (PROFESORES.includes(","))
      PROFESORES = PROFESORES.replace(",", "\n");
    this._cuerpo = `En la ciudad de Guadalajara, en la fecha ${dia} (${this.fechas.numero[dia]}) del mes de ${this.fechas.mes[mes]} de ${anio} se reunieron en el ${CU} los C. Profesores \n\n${PROFESORES} \nMiembros del Jurado designados por el Comité de Titulación de la Lienciatura en ${value.alumno.carrera} quienes realizaron la Ceremonia de Titulación de la Pasante: ${value.alumno.nombre} quien para obtener el Título de ${value.alumno.titulo} cubrió los requisitos del Reglamento General de Titulación de acuerdo al artículo 14, fracción III y los numerales artículo 13, fracción III, del reglamento Reglamento de titulación de este Centro se presentó bajo la modalidad de: ${value.modalidad} opción ${value.opcion} \n\nse realizó la evaluación al sustentante con el trabajo "${value.trabajo}" contestando satisfactoriamente las interrogantes formuladas por el jurado, el cual posteriormente procedió a la deliberación \n\nen la que se consideró aprobada con la calificación ${value.calificacion}. Finalmente el  PRESIDENTE DEL JURADO tomó a la sustentante la protesta de ley, a la cuál contestó  "SI PROTESTO". Con lo anterior, se dio por terminada la ceremonia, firmando el acta quienes en ella intervinieron`
    console.log(this.contenedorTexto)
  }

}
