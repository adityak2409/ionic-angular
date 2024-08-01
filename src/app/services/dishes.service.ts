import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  private dishes: Dish[] = [
    {
      id: '1',
      title: 'Mutton Biryani',
      description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
      imageUrl: 'https://i.ytimg.com/vi/s4YsKuoYTe8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8DNcG2opFjrju1AlULhM7SOQLfA'
    },
    {
      id: '2',
      title: 'Chicken Curry',
      description: 'A flavorful dish made with chicken simmered in a spicy curry sauce.',
      imageUrl: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Chicken-Curry-Recipe.jpg'
    }
  ];

  constructor() {}

  getDishes(): Dish[] {
    return [...this.dishes];
  }

  getDish(id: string): Dish | undefined {
    return this.dishes.find(dish => dish.id === id);
  }
}
