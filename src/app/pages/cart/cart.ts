import { Component } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
})
export class Cart {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Noise cancelling premium headphones.',
      price: 2999,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1518444028785-8fbcd101ebb9',
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Track your fitness and health.',
      price: 4999,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1511732351661-5bba1f40d1c5',
    },
  ];

  increaseQuantity(item: CartItem) {
    item.quantity += 1;
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) item.quantity -= 1;
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter((ci) => ci.id !== item.id);
  }

  getSubtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getTax(): number {
    return this.getSubtotal() * 0.05; // 5% tax
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }

  checkout() {
    alert('Proceeding to checkout...');
  }
}
