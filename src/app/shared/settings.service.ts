import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataDice } from './storage.service';

export interface TranslationEntry {
  source: string;
  translation: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private numberOfDices: number;
  private numberOfSides: number;
  private language: string;
  private germanTranslations: TranslationEntry[];
  private updatedSource = new Subject();

  updated$ = this.updatedSource.asObservable();

  constructor() {
      this.numberOfDices = 1;
      this.numberOfSides = 6;
      this.language = 'de';
      this.germanTranslations = this.getGermanTranslations();
  }

  loadSettings(data: DataDice) {
    this.numberOfDices = data.numberOfDices;
    this.numberOfSides = data.numberOfSides;
    this.language = data.language;
    this.updatedSource.next();
  }

  // number of dices

  getNumberOfDices(): number {
    return this.numberOfDices;
  }

  canIncreaseNumberOfDices(): boolean {
    return this.numberOfDices < 20;
  }

  increaseNumberOfDices() {
    if (this.canIncreaseNumberOfDices())
    {
      this.numberOfDices++;
      this.updatedSource.next();
    }
  }

  canDecreaseNumberOfDices(): boolean {
    return this.numberOfDices > 1;
  }

  decreaseNumberOfDices() {
    if (this.canDecreaseNumberOfDices())
    {
      this.numberOfDices--;
      this.updatedSource.next();
    }
  }

  // number of sides

  getNumberOfSides(): number {
    return this.numberOfSides;
  }

  canIncreaseNumberOfSides(): boolean {
    return this.numberOfSides < 20;
  }

  increaseNumberOfSides() {
    if (this.canIncreaseNumberOfSides())
    {
      this.numberOfSides++;
      this.updatedSource.next();
    }
  }

  canDecreaseNumberOfSides(): boolean {
    return this.numberOfSides > 2;
  }

  decreaseNumberOfSides() {
    if (this.canDecreaseNumberOfSides())
    {
      this.numberOfSides--;
      this.updatedSource.next();
    }
  }

  // language

  getLanguage(): string {
    return this.language;
  }

  setLanguage(language: string) {
    this.language = language;
    this.updatedSource.next();
  }

  translate(input: string) {
    if (this.language === 'de') {
      return this.translateWithDictionary(input, this.germanTranslations);
    } else {
      return input;
    }
  }

  private translateWithDictionary(
    input: string,
    dictionary: TranslationEntry[]
  ): string {
    const found = dictionary.find(entry => entry.source === input);
    return found === undefined ? input : found.translation;
  }

  private getGermanTranslations(): TranslationEntry[] {
    let translations: TranslationEntry[] = [];
    translations.push({ source: 'all', translation: 'alle' });
    translations.push({ source: 'Delete history', translation: 'Historie löschen' });
    translations.push({ source: 'dices', translation: 'Würfeln' });
    translations.push({ source: 'History', translation: 'Historie' });
    translations.push({ source: 'less', translation: 'weniger' });
    translations.push({ source: 'more', translation: 'mehr' });
    translations.push({ source: 'roll', translation: 'würfeln' });
    translations.push({ source: 'Settings', translation: 'Einstellungen' });
    translations.push({ source: 'sides', translation: 'Seiten' });
    translations.push({ source: 'Statistics', translation: 'Statistik' });
    translations.push({ source: 'This program runs only in your browser. No data is transfered to any server.', translation: 'Diese Anwendung wird nur in Ihrem Browser ausgeführt. Keine Daten werden zu irgendeinem Server übertragen.' });
    translations.push({ source: 'with', translation: 'mit' });
    
    return translations;
  }

}
