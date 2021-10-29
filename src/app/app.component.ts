import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {
  }

  onCreatePost(postData: { title: string; genre: string }) {
    // Send Http request
    this.http
      .post(
        'https://movieproject-9ad14-default-rtdb.firebaseio.com/movies.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
        console.log(postData);
      });
  }
}
