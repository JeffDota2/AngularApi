import { Component } from '@angular/core';
import { ProductosService } from './service/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public cosas:Array<any>=[]
  constructor(
    private productosService:ProductosService
  ){

    this.productosService.getProductos().subscribe((resp: any)=>{
      console.log(resp)
      this.cosas = resp
    })
    
  }
}
