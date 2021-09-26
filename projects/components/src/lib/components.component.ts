import { Component, Input, ElementRef, ViewEncapsulation, EventEmitter, Output, OnInit } from "@angular/core";

import * as Survey from "survey-angular";

@Component({
  selector: 'wc-surveyjs',
  templateUrl: 'survey.component.html',
  styleUrls: [
    '../../../../node_modules/survey-angular/modern.css'
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  @Input()
  result: any;

  constructor(public element: ElementRef) {
    this.element.nativeElement
  }

  ngOnInit() {

    Survey.StylesManager.applyTheme("modern");

    const json = { 
      questions: [
        { 
          type: "radiogroup", 
          name: "car", 
          title: "What car are you driving?", 
          isRequired: true, 
          colCount: 4, 
          choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"] 
        }
      ]
    };

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
