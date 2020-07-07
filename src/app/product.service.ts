import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(public http: HttpClient) {}
  productData
  prodid;
  getService(): Observable<any> {
    return this.http.get(
      "https://5f0428508b06d60016dde0fb.mockapi.io/secondAttempt"
    ).pipe(
      catchError(err => {
        console.log("The error is" + err);
        return err
      })
    );
  }

  

  

}
