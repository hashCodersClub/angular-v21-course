import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [FormsModule, RouterLinkActive, CommonModule, RouterLink, RouterLinkActive],
})
export class Header {}
