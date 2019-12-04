import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-vista-previa',
  templateUrl: './vista-previa.component.html',
  styleUrls: ['./vista-previa.component.scss']
})
export class VistaPreviaComponent implements OnInit {
  @ViewChild("contenido", { static: true }) pdfContainer: ElementRef;
  constructor() { }
  ngOnInit() {
    console.log(this.pdfContainer.nativeElement)
    let pdf = new jsPDF({
      format: "legal"
    });
    pdf.fromHTML(this.pdfContainer.nativeElement, 10, 10);
    pdf.save("nombre.pdf");
  }

}
