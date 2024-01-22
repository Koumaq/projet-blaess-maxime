import {Component, OnInit} from '@angular/core';
import {CartState} from "../shared/states/cart-state";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {Product} from "../../assets/models/product";
import {SuppTout, SuppPro} from "../shared/action/cart-action";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private store: Store) {
  }
  // @ts-ignore
  @Select(CartState.getListProducts) list$: Observable<Product[]>;

  delCart(p: Product): void {
    this.store.dispatch(new SuppPro(p));
  }

  SuppTout(): void {
    this.store.dispatch(new SuppTout());
  }
  ngOnInit() {
  }
}
