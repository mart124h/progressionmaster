import { Component, OnInit } from '@angular/core';
import { ProgressionmasterService } from 'src/app/services/progressionmaster.service';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  stats: any;
  selection: any;

  constructor(private btService:ProgressionmasterService,
    private activatedRoute: ActivatedRoute) { }
    ngOnInit() {
    this.selection = this.activatedRoute.snapshot.params;
    let category = this.selection.Category;
    let criteria = this.selection.Criteria; 
    this.stats = _.filter(
    this.btService.excercises, 
    [ category, criteria ]
    ); 
    }
   
}