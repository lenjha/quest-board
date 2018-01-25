import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { QuestService } from '../quest.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.css'],
  providers: [QuestService]
})
export class QuestDetailsComponent implements OnInit {

  questId: string;
  questToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private questService: QuestService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.questId = urlParameters['id'];
    });
    this.questToDisplay = this.questService.getQuestById(this.questId);
  }

}
