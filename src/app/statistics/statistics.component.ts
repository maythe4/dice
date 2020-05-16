import { Component, OnInit } from '@angular/core';
import { StatisticsEntry, StatisticsService } from '../shared/statistics.service';
import { SettingsService } from '../shared/settings.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  statisticsEntries: StatisticsEntry[];

  constructor(
    private statisticsService: StatisticsService,
    private settingsService: SettingsService
  ) {
    this.statisticsService.updated$.subscribe(() => {
      this.prepareData();
    });
  }

  ngOnInit(): void {
    this.prepareData();
  }

  private prepareData() {
    this.statisticsEntries = this.statisticsService.getStatistics();
  }

  formatStatisticsEntry(statisticsEntry: StatisticsEntry): string {
    const output = statisticsEntry.diceValue
      + ": " + statisticsEntry.count
      + " (" + statisticsEntry.percent + "%)";
    return output;
  }

  translate(input: string) {
    return this.settingsService.translate(input);
  }

}
