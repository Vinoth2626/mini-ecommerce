import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  productsSource = new BehaviorSubject([]);
  constructor(private http: HttpClient) { }

  getProducts():Observable<any> {
   return this.http.get(environment.apiUrl+'/api/v1/product')
    }
  searchProducts(searchText:string) {
      return this.http.get(environment.apiUrl+'/api/v1/product',{
        params:{keyword:searchText }
      })
       }
  
}
