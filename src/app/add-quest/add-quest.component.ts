import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quest } from '../quest.model';

@Component({
  selector: 'app-add-quest',
  templateUrl: './add-quest.component.html',
  styleUrls: ['./add-quest.component.css']
})
export class AddQuestComponent implements OnInit {
  @Output() addQuestSender = new EventEmitter();
  @Output() cancelNewQuestSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitQuest(title: string, giver: string, description: string, objectives: string, reward: string){
    const newQuest: Quest = new Quest(
      title,
      giver,
      description,
      objectives.split(','),
      parseInt(reward)
    );
    this.addQuestSender.emit(newQuest);
  }

  cancelAddNewQuest(){
    this.cancelNewQuestSender.emit();
  }
}
