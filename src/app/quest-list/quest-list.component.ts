import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestService } from '../quest.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css'],
  providers: [QuestService]
})
export class QuestListComponent implements OnInit {

  quests: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(
    private router: Router,
    private questService: QuestService
  ) { }

  ngOnInit() {
    this.quests = this.questService.getQuests();
  }

  goToQuestDetails(clickedQuest){
    this.router.navigate(['quests', clickedQuest.$key]);
  }

}
