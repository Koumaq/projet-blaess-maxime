import {Product} from "../../../assets/models/product";

export class AjouterPro {
  static readonly type = '[Produit] Add';
  constructor(public payload: Product) {
  }
}

export class SuppPro {
  static readonly type = '[Product] Del';
  constructor(public payload: Product) {
  }
}

export class SuppTout {
  static readonly type = '[Product] SuppTout';
  constructor() {
  }
}
