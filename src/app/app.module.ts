import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DicesContainerComponent } from './dices-container/dices-container.component';
import { DiceComponent } from './dice/dice.component';
import { HistoryComponent } from './history/history.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { DicesControlComponent } from './dices-control/dices-control.component';

@NgModule({
  declarations: [
    AppComponent,
    DicesContainerComponent,
    DiceComponent,
    HistoryComponent,
    StatisticsComponent,
    SettingsComponent,
    DicesControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
