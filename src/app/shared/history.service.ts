import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dice, DiceService } from './dice.service';

export interface HistoryEntry {
    date: Date;
    dices: Dice[];
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private history: HistoryEntry[];
  private updatedSource = new Subject();
  
  updated$ = this.updatedSource.asObservable();

  constructor(private diceService: DiceService) { 
    this.history = [];

    this.diceService.updated$.subscribe(() => {
      this.insertHistoryEntry(this.diceService.getDices());
      this.updatedSource.next();
    });
  }

  getHistory(): HistoryEntry[] {
    return this.history;
  }

  loadHistory(history: HistoryEntry[]) {
    this.history = history;
    this.updatedSource.next();
  }
  
  private insertHistoryEntry(dices: Dice[]) {
    if (dices.length > 0)
    {
      const historyEntry: HistoryEntry = {
        date: new Date(),
        dices: dices
      };
      this.history.unshift(historyEntry);
      this.history = this.history.slice(0, 50);
    }
  }

}
