import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  prodRes;
  pid;
  constructor(private ar: ActivatedRoute, public productService: ProductService) {
    this.pid = this.ar.snapshot.params.id;
    this.productService.getService().subscribe((data: any[]) => {
      console.log(this.pid);
      this.prodRes = data;
      console.log(this.prodRes);
    })
   }

  ngOnInit(): void {
  }

}
