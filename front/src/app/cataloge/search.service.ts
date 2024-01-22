import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  Search(input: string) {
    return this.http.get(
      environment.backendProduit + "?name=" + input
    );
  }
}
