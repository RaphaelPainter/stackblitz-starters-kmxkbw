import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ComponentsModule } from '../@components/components.module';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [ContactComponent, HomeComponent, UsersComponent],
  exports: [ContactComponent, HomeComponent, UsersComponent],
})
export class PagesModule {}
