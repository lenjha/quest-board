import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { QuestService } from '../quest.service';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css'],
  providers: [QuestService]
})
export class QuestListComponent implements OnInit {
  quests: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private questService: QuestService
  ) { }

  ngOnInit() {
    this.quests = this.questService.getQuests();
  }

  goToDetailPage(clickedQuest){
    this.router.navigate(['quests', clickedQuest.$key]);
  }

}
