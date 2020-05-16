import { Component, OnInit } from '@angular/core';
import { HistoryEntry, HistoryService } from '../shared/history.service';
import { SettingsService } from '../shared/settings.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  private historyEntries: HistoryEntry[];
  historyToShow: HistoryEntry[];
  showCount = 5;

  constructor(
    private historyService: HistoryService,
    private settingsService: SettingsService
  ) { 
    this.historyService.updated$.subscribe(() => {
      this.prepareData();
    });
  }

  ngOnInit(): void {
    this.prepareData();
  }

  private prepareData() {
    this.historyEntries = this.historyService.getHistory();
    this.prepareHistoryToShow();
  }

  formatHistoryEntry(historyEntry: HistoryEntry): string {
    const d = historyEntry.date;
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const second = d.getSeconds();

    let formatedDate = '' + year;
    formatedDate += '-' + ('0' + month).substr(-2);
    formatedDate += '-' + ('0' + day).substr(-2);
    formatedDate += ' ' + ('0' + hour).substr(-2);
    formatedDate += ':' + ('0' + minute).substr(-2);
    formatedDate += ':' + ('0' + second).substr(-2);
    
    const diceValues = historyEntry.dices.map(dice => dice.value).join(', ');
    const output = formatedDate + ": " + diceValues;
    return output;
  }

  prepareHistoryToShow() {
    this.historyToShow = this.historyEntries.slice(0, this.showCount);
  }

  translate(input: string) {
    return this.settingsService.translate(input);
  }

  // more

  canShowMore() {
    if (this.showCount >= 50 || this.historyEntries.length <= this.showCount) {
      return false;
    }

    return true;
  }

  showMore() {
    if (this.showCount + 5 <= 50) {
      this.showCount += 5;
      this.prepareHistoryToShow();
    }
  }

  // less

  canShowLess() {
    if (this.showCount <= 5 || this.historyEntries.length <= 5) {
      return false;
    }

    return true;
  }

  showLess() {
    if (this.showCount - 5 >= 5) {
      this.showCount -= 5;
      this.prepareHistoryToShow();
    }
  }

  // all

  canShowAll() {
    return this.canShowMore();
  }

  showAll() {
    while(this.canShowMore()) {
      this.showMore();
    }
  }

}
