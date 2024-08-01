import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';
import { Dish } from '../models/dish.model';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.page.html',
  styleUrls: ['./dishes.page.scss'],
})
export class DishesPage implements OnInit {
  dishes: Dish[] | undefined;

  constructor(private dishesService: DishesService) {}

  ngOnInit() {
    this.dishes = this.dishesService.getDishes();
  }
}
