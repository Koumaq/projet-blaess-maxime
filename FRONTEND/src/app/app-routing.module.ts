import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {CatalogComponent} from "./cataloge/catalog.component";
import {ConnectionComponent} from "./connection/connection.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {CartComponent} from "./panier/cart.component";

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'connection', component: ConnectionComponent },
  { path: 'account-creation', component: InscriptionComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
