import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Counter],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('client');
}
