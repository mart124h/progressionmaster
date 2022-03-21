import { Component, OnInit } from '@angular/core';
import { ProgressionmasterService } from 'src/app/services/progressionmaster.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-excercises',
  templateUrl: './excercises.page.html',
  styleUrls: ['./excercises.page.scss'],
})
export class ExcercisesPage implements OnInit {

  excercises: any;


  constructor(private btService:ProgressionmasterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.btService.getExcercises().then(data => this.excercises = data);
    
  }

}
