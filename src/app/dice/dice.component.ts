import { Component, OnInit, Input } from '@angular/core';
import { Dice } from '../shared/dice.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  @Input() dice: Dice;

  ngOnInit(): void {
  }

}
