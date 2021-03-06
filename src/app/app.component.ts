import { Component, OnInit } from '@angular/core';
import { HistoryService } from './shared/history.service';
import { StatisticsService } from './shared/statistics.service';
import { SettingsService } from './shared/settings.service';
import { StorageService } from './shared/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private historyService: HistoryService,
    private statisticsService: StatisticsService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.storageService.loadData();
  }

  showHistory(): boolean {
    return this.historyService.getHistory().length > 0;
  }

  showStatistics(): boolean {
    return this.statisticsService.getStatistics().length > 0;
  }

}
