import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { User } from '../../@shared/interfaces/user.model';

@Component({
  selector: '[userComponent]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnChanges, OnInit {
  @Input() user?: User;
  @Output() isAdmin = new EventEmitter();
  isAdminText = '';

  ngOnChanges(changes: any) {
    console.warn(changes);
  }

  ngOnInit() {
    this.isAdminText = this.user?.isAdmin ? 'Is admin' : 'Not admin';
  }

  onClickIsAdmin(): void {
    this.isAdmin.emit(this.user);
    this.isAdminText = this.user?.isAdmin ? 'Is admin' : 'Not admin';
  }
}
