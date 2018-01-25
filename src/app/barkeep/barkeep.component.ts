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

  constructor(
    private questService: QuestService
  ) { }

  ngOnInit() {
  }

}
