import { Component, OnInit } from '@angular/core';
import { language } from '../../../app.language'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	lan = language.en
  constructor() { }

  ngOnInit() {
  }

}
