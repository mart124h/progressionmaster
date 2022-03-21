import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-plan',
  templateUrl: './training-plan.page.html',
  styleUrls: ['./training-plan.page.scss'],
})
export class TrainingPlanPage implements OnInit {

  tours = [
    { ID: 1, Title: 'Day 1 | Back Focused' },
    { ID: 2, Title: 'Day 2 | Chest Focused' },
    { ID: 3, Title: 'Day 3 | Legs Focused' },
    { ID: 4, Title: 'Day 4 | Push Pull (1.0)' },
    { ID: 5, Title: 'Day 5 | Push Pull (2.0)' },
    { ID: 6, Title: 'Day 6 | Bike Riding' }


  ];

  constructor() { }

  ngOnInit() {
  }

}
