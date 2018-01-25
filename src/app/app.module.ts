import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestListComponent } from './quest-list/quest-list.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { QuestDetailsComponent } from './quest-details/quest-details.component';
import { BarkeepComponent } from './barkeep/barkeep.component';
import { AddQuestComponent } from './add-quest/add-quest.component';
import { EditQuestComponent } from './edit-quest/edit-quest.component';
//^ import Firebase

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};
//^ export Firebase configurations

@NgModule({
  declarations: [
    AppComponent,
    QuestListComponent,
    HomeComponent,
    QuestDetailsComponent,
    BarkeepComponent,
    AddQuestComponent,
    EditQuestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
