import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuestListComponent } from './quest-list/quest-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quest-list',
    component: QuestListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
