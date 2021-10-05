import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFormData } from 'projects/components/src/lib/components.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wc-surveyjs-ng';
  public formData: JsonFormData | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('projects/components/src/form.json')
      .subscribe((formData: JsonFormData) => {
        this.formData = formData;
      });
  }
}
