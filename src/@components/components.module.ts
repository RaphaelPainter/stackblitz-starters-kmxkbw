import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HoverDirective } from '../@shared/directives/hover.directive';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, UserComponent, HoverDirective],
  exports: [HeaderComponent, UserComponent]
})
export class ComponentsModule { }