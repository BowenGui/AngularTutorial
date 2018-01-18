import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//importing map for the http.get('url');
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log("Data service connected...");
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json()); //gets response from url and maps it to JSON
  }

}
