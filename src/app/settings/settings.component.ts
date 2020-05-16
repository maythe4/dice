import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../shared/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
  }

  // dices

  getNumberOfDices(): number {
    return this.settingsService.getNumberOfDices();
  }

  canDecreaseNumberOfDices(): boolean {
    return this.settingsService.canDecreaseNumberOfDices();
  }

  decreaseNumberOfDices() {
    this.settingsService.decreaseNumberOfDices();
  }

  canIncreaseNumberOfDices(): boolean {
    return this.settingsService.canIncreaseNumberOfDices();
  }

  increaseNumberOfDices() {
    this.settingsService.increaseNumberOfDices();
  }
  
  // sides

  getNumberOfSides(): number {
    return this.settingsService.getNumberOfSides();
  }

  canDecreaseNumberOfSides(): boolean {
    return this.settingsService.canDecreaseNumberOfSides();
  }

  decreaseNumberOfSides() {
    this.settingsService.decreaseNumberOfSides();
  }

  canIncreaseNumberOfSides(): boolean {
    return this.settingsService.canIncreaseNumberOfSides();
  }

  increaseNumberOfSides() {
    this.settingsService.increaseNumberOfSides();
  }

  // language

  isEnglish() {
    return this.settingsService.getLanguage() === 'en';
  }

  speakEnglish() {
    this.settingsService.setLanguage('en');
  }

  isGerman() {
    return this.settingsService.getLanguage() === 'de';
  }

  speakGerman() {
    this.settingsService.setLanguage('de');
  }

  translate(input: string) {
    return this.settingsService.translate(input);
  }

}
