import {CartStateModel} from "./cart-state-model";
import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AjouterPro, SuppTout, SuppPro} from "../action/cart-action";

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    cart: [],
  }
})
@Injectable()
export class CartState {
  @Selector()
  static getNbProducts(state: CartStateModel) {
    return state.cart.length;
  }

  @Selector()
  static getListProducts(state: CartStateModel) {
    return state.cart;
  }

  @Action(AjouterPro)
  add(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: AjouterPro
  ) {
    const state = getState();
    patchState({
      cart: [...state.cart, payload],
    });
  }

  @Action(SuppPro)
  del(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: SuppPro
  ) {
    const state = getState();
    patchState({
      cart: state.cart.filter((x) => !(payload.id == x.id)),
    });
  }

  @Action(SuppTout)
  SuppTout(
    { patchState }: StateContext<CartStateModel>,
  ) {
    patchState({
      cart: [],
    });
  }
}
