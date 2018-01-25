import { Component, OnInit } from '@angular/core';

import { QuestService } from '../quest.service';
import { Quest } from '../quest.model';

@Component({
  selector: 'app-barkeep',
  templateUrl: './barkeep.component.html',
  styleUrls: ['./barkeep.component.css'],
  providers: [QuestService]
})

export class BarkeepComponent implements OnInit {

  showNewQuestForm: boolean = false;

  constructor(
    private questService: QuestService
  ) { }

  ngOnInit() {
  }

  toggleAddNewQuestForm(){
    this.showNewQuestForm = !this.showNewQuestForm;
    //"this" as in "this class's"
  }

  addNewQuest(newQuest){
    this.toggleAddNewQuestForm();
    this.questService.addQuest(newQuest);
  }
}
