import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";

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

  constructor() { }

  ngOnInit() {
        
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

    const survey = new Survey.Model(json);

    Survey.SurveyNG.render("surveyElement", { model: survey });
  }
}
