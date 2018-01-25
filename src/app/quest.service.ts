import { Injectable } from '@angular/core';
import { Quest } from './quest.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class QuestService {
  quests: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.quests = database.list('quests');
    console.log(this.quests);
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

  updateQuest(localUpdatedQuest){
    let questEntryInFirebase = this.getQuestById(localUpdatedQuest.$key);
    questEntryInFirebase.update({
      title: localUpdatedQuest.title,
      questGiver: localUpdatedQuest.questGiver,
      description: localUpdatedQuest.description,
      objectives: localUpdatedQuest.objectives,
      coinReward: localUpdatedQuest.coinReward
    });
  }

}
