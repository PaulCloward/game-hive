import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchTabPage } from './search-tab.page';
import { SearchCriteriaPage } from '../search-criteria/search-criteria.page';
import { PopupSearchCriteriaComponent } from '../../components/popup-search-criteria/popup-search-criteria.component';

const routes: Routes = [
  {
    path: '',
    component: SearchTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchTabPage, SearchCriteriaPage, PopupSearchCriteriaComponent],
  entryComponents: [PopupSearchCriteriaComponent, SearchCriteriaPage]
})
export class SearchTabPageModule {}
