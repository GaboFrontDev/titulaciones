import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import documento from '../../interfaces/documento.interface';
import { Fechas } from './util_fechas';
import { NumeroALetras } from '../../utils/NumeroALetra';

@Component({
  selector: 'app-vista-previa',
  templateUrl: './vista-previa.component.html',
  styleUrls: ['./vista-previa.component.scss']
})
export class VistaPreviaComponent implements OnInit {
  dia: number;
  mes: number;
  anio: number;
  CU: string;
  PROFESORES: string;
  hasBody = false
  @Input() set documento(value: documento) {
    this.setCuerpo(value);
    this._documento = value
  }
  get documento(): documento {
    return this._documento;
  }

  @ViewChild("texto", { static: true }) contenedorTexto: ElementRef;

  _cuerpo: string;
  _documento: documento;
  fechas = new Fechas();

  constructor() { }

  async ngOnInit() {
  }

  public NumeroALetra = NumeroALetras

  get cuerpo(): string {
    return this._cuerpo
  }

  setCuerpo(value: documento) {
    if (!value)
      return;
    const FECHA = new Date(value.fecha);
    this.dia = FECHA.getDate();
    this.mes = FECHA.getMonth();
    this.anio = FECHA.getFullYear();
    this.CU = "Centro Universitario de ciencias exactas e ingenierías"
    this.PROFESORES = value.profesores.map(profesor => profesor.nombre).join();
    while (this.PROFESORES.includes(","))
      this.PROFESORES = this.PROFESORES.replace(",", "\n");
    this.hasBody = true
  }

}
