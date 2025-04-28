import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  items = this.carritoServices.getItems();

  constructor(private carritoServices: CarritoService){}
}
