import { Component, OnInit } from '@angular/core';
import { Dice, DiceService } from '../shared/dice.service';
import { SettingsService } from '../shared/settings.service';

@Component({
  selector: 'app-dices-control',
  templateUrl: './dices-control.component.html',
  styleUrls: ['./dices-control.component.css']
})
export class DicesControlComponent implements OnInit {
  dices: Dice[];

  constructor(
    private diceService: DiceService,
    private settingsService: SettingsService
  ) {
    this.diceService.updated$.subscribe(() => {
      this.prepareData();
    }); }

  ngOnInit(): void {
    this.prepareData();
  }

  private prepareData() {
    this.dices = this.diceService.getDices();
  }

  showDices(): boolean {
    return this.dices.length > 0;
  }

  roll() {
    this.diceService.roll();
  }

  translate(input: string) {
    return this.settingsService.translate(input);
  }

}
