import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuestListComponent } from './quest-list/quest-list.component';
import { QuestDetailsComponent } from './quest-details/quest-details.component';
import { BarkeepComponent } from './barkeep/barkeep.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quest-list',
    component: QuestListComponent
  },
  {
    path: 'quests/:id',
    component: QuestDetailsComponent
  },
  {
    path: 'barkeep',
    component: BarkeepComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
