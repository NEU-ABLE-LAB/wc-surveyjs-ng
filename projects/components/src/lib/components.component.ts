import { Component, Input, ElementRef, ViewEncapsulation, EventEmitter, Output, OnInit, OnChanges, SimpleChange, SimpleChanges } from "@angular/core";

import * as Survey from "survey-angular";

@Component({
  selector: 'wc-surveyjs',
  templateUrl: 'survey.component.html',
  styleUrls: [
    '../../../../node_modules/survey-angular/modern.css'
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SurveyComponent implements OnInit, OnChanges {
  @Output()
  private _submitSurvey = new EventEmitter<any>();
  public get submitSurvey() {
    return this._submitSurvey;
  }
  public set submitSurvey(value) {
    this._submitSurvey = value;
  }
  @Input('string') jsonString: string; 
  
  result: any;

  constructor(public element: ElementRef) {
    this.element.nativeElement
  }

  ngOnChanges(changes: SimpleChanges) {

 
  }
  ngOnInit() {
    Survey.StylesManager.applyTheme("modern");
       // const json = JSON.parse(this.jsonString)
       
      const json = JSON.parse(this.jsonString);
      
       // Get element in to apply survey to (needed for shadow DOMs)
       //  https://stackoverflow.com/a/32709672/6661759
       const surveyElement = this.element.nativeElement.shadowRoot.querySelector('#surveyContainer');
   
       const survey = new Survey.Model(
         json, 
         surveyElement
       );
   
       Survey.SurveyNG.render("surveyElement", { model: survey });
  }
}
