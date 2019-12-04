import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import formulario from '../../classes/formulario';
import documento from '../../interfaces/documento.interface';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  @Output() fileUpdate = new EventEmitter<documento>();
  constructor() { }
  formulario = new formulario();
  ngOnInit() {
    this.formulario.documentoForm.statusChanges.subscribe(() => this.fileUpdate.emit(this.formulario.documentoForm.value))
  }

}
