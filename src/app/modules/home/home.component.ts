import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import documento from './interfaces/documento.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isDisabled: boolean;
  @ViewChild("contenidoPDF", { static: true }) pdfContainer: ElementRef;
  pdf: jsPDF;
  timeOut: any
  documento: documento;
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  async generarPDF() {
    let canvas = await html2canvas(this.pdfContainer.nativeElement, { scale: 1 })
    let pdf = new jsPDF('p', 'mm', 'legal');
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 215.9, 355.6);
    this.pdf = pdf;
  }

  onUpdate(value: documento) {
    this.documento = value;
    this.isDisabled = true;
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(async () => {
      this.openSnackBar("actualizando")
      await this.generarPDF();
      this.isDisabled = false;
    }, 4000);
  }

  descargarPDF(): void {
    if (!!this.pdf) {
      let nombre_archivo = "prueba"
      this.pdf.save(nombre_archivo);
    }
  }

  openSnackBar(message: string, action = "") {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
