import { Injectable } from '@angular/core';
import { Quest } from './quest.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class QuestService {
  quests: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.quests = database.list('quests');
  }

  getQuests() {
    return this.quests;
  }

  addQuest(newQuest: Quest) {
    this.quests.push(newQuest);
  }

  getQuestById(questId: string){
    return this.database.object('quests/' + questId);
  }

}
