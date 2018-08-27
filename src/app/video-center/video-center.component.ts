import { Component, OnInit } from '@angular/core';
import { Video } from './../video';


@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

	videos: Video[] =[
		{"_id":"1","title":"Title1","url":"url 1","description":"desc 1"},
		{"_id":"2","title":"Title2","url":"url 1","description":"desc 1"},
		{"_id":"3","title":"Title3","url":"url 1","description":"desc 1"}
	];

  constructor() { }

  ngOnInit() {
  }

}
