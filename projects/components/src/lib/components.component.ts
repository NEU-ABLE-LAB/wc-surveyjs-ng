import { Component, Input, ElementRef, ViewEncapsulation, EventEmitter, Output, OnInit } from "@angular/core";

import * as Survey from "survey-angular";
import * as jsonData from "projects/components/src/form.json"

interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}

interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}

interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: JsonFormControlOptions;
  required: boolean;
  validators: JsonFormValidators;
}

export interface JsonFormData {
  controls: JsonFormControls[];
}

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
  @Input() jsonFormData: any;

  constructor(public element: ElementRef) {
    this.element.nativeElement
  }

  ngOnInit() {

    Survey.StylesManager.applyTheme("modern");

    

    // Get element in to apply survey to (needed for shadow DOMs)
    //  https://stackoverflow.com/a/32709672/6661759
    const surveyElement = this.element.nativeElement.shadowRoot.querySelector('#surveyContainer');

    const survey = new Survey.Model(
      this.jsonFormData,
       
      // surveyElement
    );

    Survey.SurveyNG.render("surveyElement", { model: survey });
  }
}
