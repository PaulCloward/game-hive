import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  /*{ path: '', loadChildren: './pages/feedback/feedback.module#FeedbackPageModule' },*/
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'choose-avatar', loadChildren: './pages/choose-avatar/choose-avatar.module#ChooseAvatarPageModule' },
  { path: 'search-criteria', loadChildren: './pages/search-criteria/search-criteria.module#SearchCriteriaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
