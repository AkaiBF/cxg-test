import { Component, OnInit } from '@angular/core';
import { language } from '../../../app.language'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	lan = language.en
  constructor() { }

  ngOnInit() {
  }

}
