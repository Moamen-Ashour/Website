import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInfo } from './product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PViewService {

private Url : any = "http://159.65.93.151:7000/api/v1/dash-board/product";

  constructor(private http: HttpClient) { }

  getProduct(): Observable<ProductInfo[]>{
    return this.http.get<ProductInfo[]>(this.Url);
  }
}
