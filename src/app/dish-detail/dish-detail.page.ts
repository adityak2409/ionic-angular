import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishesService } from '../services/dishes.service';
import { Dish } from '../models/dish.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.page.html',
  styleUrls: ['./dish-detail.page.scss'],
})
export class DishDetailPage implements OnInit {
  loadedDish: Dish | undefined;

  constructor(private route: ActivatedRoute, private dishesService: DishesService,private router:Router,private alert:AlertController) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('dishId')) {
        // Handle error case
        return;
      }
      const dishId = paramMap.get('dishId');
      if (dishId) {
        this.loadedDish = this.dishesService.getDish(dishId);
      }
    });
  }
  OnDelete(){
    this.alert.create({
    header:'Are you sure',
    message:'Do you really want to delete'
  });
  buttons:[
    {
       Text:'cancel',
       handler:()=>{
// this.dishesService.getDish(this.loadedDish?.id);
    this.router.navigate(['/dishes'])
       }
    }
  ]

    
  }
}
