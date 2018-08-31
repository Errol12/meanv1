import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

//>>>npm install rxjs@6 rxjs-compat@6 --save

@Injectable({
  providedIn: 'root'
})
export class VideoService {

	private _getUrl="/api/videos/";
	constructor(private _http: Http) { }

	getVideos(){
		return this._http.get(this._getUrl)
			.map((response: Response) => response.json());
	}

}
