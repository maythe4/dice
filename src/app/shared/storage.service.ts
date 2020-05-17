import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { HistoryEntry, HistoryService } from './history.service';

export interface DataDice {
  numberOfDices: number;
  numberOfSides: number;
  language: string;
  history: HistoryEntry[];
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly storageObjectName: string = 'dataDice';

  constructor(
    private settingsService: SettingsService,
    private historyService: HistoryService
  ) {
    this.settingsService.updated$.subscribe(() => { this.saveData(); });
    this.historyService.updated$.subscribe(() => { this.saveData(); });
  }
  
  loadData() {
    const data: DataDice = JSON.parse(localStorage.getItem(this.storageObjectName));
    if (data !== undefined && data !== null) {
      // settings
      if (this.settingsService.getNumberOfDices() !== data.numberOfDices ||
          this.settingsService.getNumberOfSides() !== data.numberOfSides ||
          this.settingsService.getLanguage() !== data.language) {

        this.settingsService.loadSettings(data);
      }

      // history
      const dataHistoryString = JSON.stringify(data.history);
      const currentHistoryString = JSON.stringify(this.historyService.getHistory());
      if (dataHistoryString !== currentHistoryString)
      {
        this.historyService.setHistory(data.history);
      }
    }
  }

  saveData() {
    let shouldSave: Boolean = true;

    const savedData: DataDice = JSON.parse(localStorage.getItem(this.storageObjectName));
    if (savedData !== undefined && savedData !== null) {
      const dataHistoryString = JSON.stringify(savedData.history);
      const currentHistoryString = JSON.stringify(this.historyService.getHistory());

      if (this.settingsService.getNumberOfDices() === savedData.numberOfDices &&
          this.settingsService.getNumberOfSides() === savedData.numberOfSides &&
          this.settingsService.getLanguage() === savedData.language &&
          dataHistoryString === currentHistoryString) {

        shouldSave = false;
      }
    }

    if (shouldSave)
    {
      const newData: DataDice = {
        numberOfDices: this.settingsService.getNumberOfDices(),
        numberOfSides: this.settingsService.getNumberOfSides(),
        language: this.settingsService.getLanguage(),
        history: this.historyService.getHistory()
      };
      localStorage.setItem(this.storageObjectName, JSON.stringify(newData));
    }

  }

}
