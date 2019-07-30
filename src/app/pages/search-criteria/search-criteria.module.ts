import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchCriteriaPage } from './search-criteria.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCriteriaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchCriteriaPage]
})
export class SearchCriteriaPageModule {}
