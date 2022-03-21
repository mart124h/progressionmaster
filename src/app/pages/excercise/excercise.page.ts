import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgressionmasterService } from 'src/app/services/progressionmaster.service';
import _ from 'lodash';


@Component({
  selector: 'app-exercise',
  templateUrl: './excercise.page.html',
  styleUrls: ['./excercise.page.scss'],
})
export class ExcercisePage implements OnInit {
  excercise: any;
  stats: any;

  constructor(private btService:ProgressionmasterService, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
  console.log(this.activatedRoute);
  this.stats = this.btService.stats;
  this.excercise = this.activatedRoute.snapshot.params;
  let excerciseID = this.excercise.eID;
  //this.stats = _.filter(this.stats, [excerciseID]);

  //this.stats = _.filter(this.stats, stat => stat.Reps === '32');

  console.log(
   this.stats
  );
  //this.btService.getStats().then(data => this.stats = data);

  

  }

  

}
