import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
    this.formulario.documentoForm.valueChanges.subscribe((val: documento) => {
      this.fileUpdate.emit(val)
    })
  }

}
