import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        {
          path: 'search-tab',
          children:
            [
              {
                path: '',
                loadChildren: '../search-tab/search-tab.module#SearchTabPageModule'
              }
            ]
        },
        {
          path: 'scores-tab',
          children:
            [
              {
                path: '',
                loadChildren: '../scores-tab/scores-tab.module#ScoresTabPageModule'
              }
            ]
        },
        {
          path: 'tools-tab',
          children:
            [
              {
                path: '',
                loadChildren: '../tools-tab/tools-tab.module#ToolsTabPageModule'
              }
            ]
        },
        {
          path: 'discover-tab',
          children:
            [
              {
                path: '',
                loadChildren: '../discover-tab/discover-tab.module#DiscoverTabPageModule'
              }
            ]
        },
        {
          path: 'profile-tab',
          children:
            [
              {
                path: '',
                loadChildren: '../profile-tab/profile-tab.module#ProfileTabPageModule'
              }
            ]
        },
        {
          path: 'hive-tab',
          children:
            [
              {
                path: '',
                loadChildren: '../hive-tab/hive-tab.module#HiveTabPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/tabs/hive-tab',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/tabs/hive-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}