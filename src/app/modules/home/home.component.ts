import { Component, OnInit, EventEmitter } from '@angular/core';
import documento from './interfaces/documento.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onUpdate(val) {
    console.log(val);

  }

}
