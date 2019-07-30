import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScoresTabPage } from './scores-tab.page';
import { GameDisplayComponent } from '../../components/game-display/game-display.component';
import { PlayerScoreComponent } from '../../components/player-score/player-score.component';

const routes: Routes = [
  {
    path: '',
    component: ScoresTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScoresTabPage, GameDisplayComponent, PlayerScoreComponent]
})
export class ScoresTabPageModule {}
