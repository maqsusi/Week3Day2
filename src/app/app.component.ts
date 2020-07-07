import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Observable, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  prodRes;

  constructor(public productService: ProductService) {

    // this.productService.getService().subscribe((data: any[]) => {
    //   console.log(data);
    //   this.prodRes = data;
    // })

    // console.log(this.prodRes);
    

  }

 





}
