import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SettingsService } from './settings.service';

export interface Dice {
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class DiceService {
  private dices: Dice[];
  private updatedSource = new Subject();

  updated$ = this.updatedSource.asObservable();

  constructor(private settingsService: SettingsService) {
    this.dices = [];

    this.settingsService.updated$.subscribe(() => {
      this.dices = [];
      this.updatedSource.next();
    });
  }

  getDices(): Dice[] {
    return this.dices;
  }

  roll() {
    this.dices = [];
    for (let i = 0; i < this.settingsService.getNumberOfDices(); i++) {
      const nextNumber = Math.floor(Math.random() * this.settingsService.getNumberOfSides()) + 1;
      this.dices.push({ value: nextNumber });
    }
    this.updatedSource.next();
  }

}
