import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../products'



@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})

export class ProductAlertsComponent {
@Input() producto: Product | undefined;
@Output() notificacion = new EventEmitter();

}


