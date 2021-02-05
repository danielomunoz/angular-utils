  
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() variablePorInputProvenienteDePadre: number;

  @Output() eventoLlamadoPorHijo: EventEmitter<number>;

  constructor() {
    this.eventoLlamadoPorHijo = new EventEmitter();
  }

  verHeroe(numero: number) {
    this.eventoLlamadoPorHijo.emit( numero );
  }

}