import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
})
export class Counter {
  count: number = 10;

  dec(): void {
    this.count--;
  }

  inc(): void {
    this.count++;
  }
}
