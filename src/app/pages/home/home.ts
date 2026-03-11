import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [NgFor, Header, Footer],
  templateUrl: './home.html',
})
export class Home {
  featuredProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Noise cancelling premium headphones.',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1518444028785-8fbcd101ebb9',
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Track your fitness and health.',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1511732351661-5bba1f40d1c5',
    },
    {
      id: 3,
      name: 'Gaming Mouse',
      description: 'High precision RGB gaming mouse.',
      price: 1499,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7',
    },
    {
      id: 4,
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical keyboard.',
      price: 3999,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    },
  ];
}
