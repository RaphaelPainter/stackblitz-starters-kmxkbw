import { Routes } from "@angular/router";
import { ContactComponent } from "./@pages/contact/contact.component";
import { HomeComponent } from "./@pages/home/home.component";
import { UsersComponent } from "./@pages/users/users.component";

export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'contact', component: ContactComponent }
];