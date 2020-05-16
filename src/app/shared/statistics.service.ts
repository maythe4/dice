import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HistoryService } from './history.service';
import { SettingsService } from './settings.service';

export interface StatisticsEntry {
    diceValue: number;
    count: number;
    percent: number;
}

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private statistics: StatisticsEntry[];
  private updatedSource = new Subject();
  
  updated$ = this.updatedSource.asObservable();

  constructor(
    private historyService: HistoryService,
    private settingsService: SettingsService
  ) { 
    this.computeStatistics();

    this.historyService.updated$.subscribe(() => {
      this.computeStatistics();
      this.updatedSource.next();
    });
  }

  getStatistics(): StatisticsEntry[] {
    return this.statistics;
  }

  private computeStatistics() {
    this.statistics = [];

    for (let i = 1; i <= this.settingsService.getNumberOfSides(); i++)
    {
      this.statistics.push({ diceValue: i, count: 0, percent: 0 });
    }

    for (let historyEntry of this.historyService.getHistory())
    {
      for (let dice of historyEntry.dices)
      {
        const found = this.statistics.find(e => e.diceValue === dice.value);
        if (found === undefined) {
          this.statistics.push({ diceValue: dice.value, count: 1, percent: 0 });
        }
        else {
          found.count++;
        }
      }
    }
    
    let sum = 0;
    for (let s of this.statistics)
    {
      sum += s.count;
    }

    if (sum > 0)
    {
      for (let s of this.statistics)
      {
        s.percent = Math.round(s.count / sum * 100);
      }
    }

    this.statistics.sort((a, b) => a.diceValue - b.diceValue);
  }
}
