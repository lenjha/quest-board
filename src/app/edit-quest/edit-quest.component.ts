import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { QuestService } from '../quest.service';

@Component({
  selector: 'app-edit-quest',
  templateUrl: './edit-quest.component.html',
  styleUrls: ['./edit-quest.component.css'],
  providers: [QuestService]
})

export class EditQuestComponent implements OnInit {
  @Input() selectedQuest;
  @Output() cancelEditEmitter = new EventEmitter;

  constructor(
    private questService: QuestService
  ) { }

  ngOnInit() {
  }

  updateQuest(selectedQuest){
    this.questService.updateQuest(selectedQuest);
  }

  deleteQuest(questToDelete){
    if(confirm("You sure?")){
      this.questService.deleteQuest(questToDelete);
    }
  }

  cancelEditQuest(){
    this.cancelEditEmitter.emit();
  }

}
