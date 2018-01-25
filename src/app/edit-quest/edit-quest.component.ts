import { Component, Input, OnInit } from '@angular/core';
import { QuestService } from '../quest.service';

@Component({
  selector: 'app-edit-quest',
  templateUrl: './edit-quest.component.html',
  styleUrls: ['./edit-quest.component.css'],
  providers: [QuestService]
})

export class EditQuestComponent implements OnInit {
  @Input() selectedQuest;

  constructor(
    private questService: QuestService
  ) { }

  ngOnInit() {
  }

  updateQuest(selectedQuest){
    this.questService.updateQuest(selectedQuest);
  }

}
