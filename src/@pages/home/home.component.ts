import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Formation Angular 17';
  description = 'Une petite description de cette superbe formation.';

  constructor() { }

  ngOnInit() {
  }

}