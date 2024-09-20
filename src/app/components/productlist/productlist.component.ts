import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  products: any[] = [
    {
      name: "Product 1",
      description: "This is a description for product 1.",
      price: 19.99,
      imageUrl: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
      name: "Product 2",
      description: "This is a description for product 2.",
      price: 29.99,
      imageUrl: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    // Add more products here...
  ];

  constructor() { }

  ngOnInit() {
    // Load products from a service or API if needed
  }

  addToCart(product: any) {
    // Handle adding product to cart
    console.log("Added to cart:", product);
  }
}
