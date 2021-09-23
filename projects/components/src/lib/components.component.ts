import { Component, Input, ElementRef, EventEmitter, Output, OnInit } from "@angular/core";

import * as Survey from "survey-angular";

import "survey-angular/modern.css";

Survey.StylesManager.applyTheme("modern");

@Component({
  selector: 'wc-surveyjs',
  templateUrl: 'survey.component.html',
  styleUrls: ['survey.component.css']
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  @Input()
  result: any;

  constructor(public element: ElementRef) {
    this.element.nativeElement // <- your direct element reference 
  }

  ngOnInit() {
        
    const json = { 
      questions: [
        { 
          type: "radiogroup", 
          name: "car", 
          title: "Which car are you driving?", 
          isRequired: true, 
          colCount: 4, 
          choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"] 
        }
      ]
    };

    // Get element in to apply survey to (needed for shadow DOMs)
    //  https://stackoverflow.com/a/32709672/6661759
    const surveyElement = this.element.nativeElement;

    const survey = new Survey.Model(json, surveyElement);

    Survey.SurveyNG.render("surveyElement", { model: survey });
  }
}
