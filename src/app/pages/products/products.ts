import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [NgFor],
  templateUrl: './products.html',
})
export class Products {
  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'High quality noise cancelling headphones.',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1518444028785-8fbcd101ebb9',
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Track your health and fitness easily.',
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
      description: 'Professional mechanical keyboard with RGB.',
      price: 3999,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    },
    {
      id: 5,
      name: 'Laptop Stand',
      description: 'Adjustable aluminium laptop stand.',
      price: 999,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    },
    {
      id: 6,
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with powerful sound.',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1585386959984-a4155223168f',
    },
  ];
}
