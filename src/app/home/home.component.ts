import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prodRes;

  constructor(public productService: ProductService) {

    this.productService.getService().subscribe((data: any[]) => {
      console.log(data);
      this.prodRes = data;
      
    })

    

    // console.log(this.prodRes);
    

  }

  ngOnInit(): void {
  }
  shareIndex(a)
  {
    let p = a + 1;
    this.productService.prodid = p;
  }


}






