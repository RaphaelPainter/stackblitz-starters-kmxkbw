import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  myAction = 'No action for now';
  hasFocus = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  onActionFocus(): void {
    console.warn('onActionFocus');
    this.myAction = 'focus';
    this.hasFocus = true;
  }

  onActionBlur(): void {
    console.warn('onActionBlur');
    this.myAction = 'blur';
    this.hasFocus = false;
  }

  onActionKeyup(): void {
    console.warn('onActionKeyup');
    this.myAction = 'keyup';
  }

  onActionClick(): void {
    console.warn('onActionClick');
    this.myAction = 'click';
    this.router.navigate(['/home']);
  }
}
