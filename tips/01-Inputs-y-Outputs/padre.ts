  
import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  variablePorInputParaHijo: number;

  constructor() { }

  gestionaEventoDelHijo(payload: any) {
    console.log(payload);
  }

}