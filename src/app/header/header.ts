import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [FormsModule],
})
export class Header {
  imageUrl: string =
    'https://tse2.mm.bing.net/th/id/OIP.B8u7c37kE5ZdM5ZCRm-4hwHaFF?pid=Api&P=0&h=180';

  movieName: string = 'KGF 21';

  handleClick(): void {
    alert(this.movieName);
  }
}
