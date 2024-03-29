import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConnectionComponent } from './connection/connection.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CartComponent } from './panier/cart.component';
import { CatalogComponent } from './cataloge/catalog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./api.service";
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";
import {CartState} from "./shared/states/cart-state";
import {NgOptimizedImage} from "@angular/common";
import {ConnectionState} from "./shared/states/connection-state";
import {SearchService} from "./cataloge/search.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConnectionComponent,
    AcceuilComponent,
    InscriptionComponent,
    CartComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot([CartState, ConnectionState]),
    NgOptimizedImage
  ],
  providers: [
    ApiService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
