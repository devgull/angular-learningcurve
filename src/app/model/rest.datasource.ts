import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { map } from "rxjs/operators";

const PROTOCOL = "http";
const PORT = 3500;
@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;
  constructor(private http: HttpClient) {
    //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  getProducts(): Observable<Product[]> {
    return this.products;
     //this.http.get<Product[]>(this.baseUrl + "products");
  }
  saveOrder(order: Order): Observable<Order> {
    return new Order[]();
    //this.http.post<Order>(this.baseUrl + "orders", order);
  }
  authenticate(user: string, pass: string): Observable<boolean> {
    return true;
    //  this.http
    //   .post<any>(this.baseUrl + "login", { name: user, password: pass })
    //   .pipe(
    //     map(response => {
    //       this.auth_token = response.success ? response.token : null;
    //       return response.success;
    //     })
    //   );
  }
}

const products = [
      {
        id: 1,
        name: "Kayak",
        category: "Watersports",

        description: "A boat for one person",
        price: 275
      },

      {
        id: 2,
        name: "Lifejacket",
        category: "Watersports",

        description: "Protective and fashionable",
        price: 48.95
      },

      {
        id: 3,
        name: "Soccer Ball",
        category: "Soccer",

        description: "FIFA-approved size and weight",
        price: 19.5
      },

      {
        id: 4,
        name: "Corner Flags",
        category: "Soccer",

        description: "Give your playing field a professional touch",

        price: 34.95
      },

      {
        id: 5,
        name: "Stadium",
        category: "Soccer",

        description: "Flat-packed 35,000-seat stadium",
        price: 79500
      },

      {
        id: 6,
        name: "Thinking Cap",
        category: "Chess",

        description: "Improve brain efficiency by 75%",
        price: 16
      },

      {
        id: 7,
        name: "Unsteady Chair",
        category: "Chess",

        description: "Secretly give your opponent a disadvantage",

        price: 29.95
      },

      {
        id: 8,
        name: "Human Chess Board",
        category: "Chess",

        description: "A fun game for the family",
        price: 75
      },

      {
        id: 9,
        name: "Bling Bling King",
        category: "Chess",

        description: "Gold-plated, diamond-studded King",
        price: 1200
      }
    ];