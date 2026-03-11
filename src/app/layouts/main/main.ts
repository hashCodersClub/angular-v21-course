import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './main.html',
})
export class Main {}
