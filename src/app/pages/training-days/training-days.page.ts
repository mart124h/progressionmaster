import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-days',
  templateUrl: './training-days.page.html',
  styleUrls: ['./training-days.page.scss'],
})
export class TrainingDaysPage implements OnInit {

  tour = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.tour = this.activatedRoute.snapshot.params;
  }

}