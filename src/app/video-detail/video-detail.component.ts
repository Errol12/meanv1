import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs:['video']
})


export class VideoDetailComponent implements OnInit {
	private editTitle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  	this.editTitle = false;
  }


  onTitleClick(){
  	this.editTitle = true;
  }
}
