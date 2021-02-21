import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  _url='http://127.0.0.1:8000/api/products'

  constructor(
    private http: HttpClient
  ) {
    console.log('Servicio Productos Activo')
   }

   getProductos(){
     let header = new HttpHeaders()
     .set('Type-content','aplication/json')

     return this.http.get(this._url,{
       headers: header
     });

   }
}
