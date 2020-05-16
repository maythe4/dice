import { Component, OnInit, Input } from '@angular/core';
import { Dice } from '../shared/dice.service';

@Component({
  selector: 'app-dices-container',
  templateUrl: './dices-container.component.html',
  styleUrls: ['./dices-container.component.css']
})
export class DicesContainerComponent implements OnInit {
  @Input() dices: Dice[];
  
  ngOnInit(): void {
  }

}
