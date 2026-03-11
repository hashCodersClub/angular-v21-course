import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [FormsModule, CommonModule],
})
export class Header {
  navList: string[] = ['Home', 'About', 'Contact', 'Projects'];
  logoText: string = 'HashCodersClub';
}
