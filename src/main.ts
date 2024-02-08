import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import 'zone.js';
import { ComponentsModule } from './@components/components.module';
import { PagesModule } from './@pages/pages.module';
import { ROUTES } from './routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PagesModule, ComponentsModule, RouterModule],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [provideRouter(ROUTES)],
});
