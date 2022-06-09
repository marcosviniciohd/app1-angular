import { FRASES } from './frases-mock';
import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  public frases: Frase[] = FRASES;

  constructor(){
      console.log(this.frases);
  }

  ngOnInit() {

  }
}
