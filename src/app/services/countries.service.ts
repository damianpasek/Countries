import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CountriesService {

  constructor(private _http : Http) {

  }

  getAllCountries() {
    return this._http.get('https://restcountries.eu/rest/v2/all').map(res => res.json());
  }

  getCountriesByName(name: string) {
    return this._http.get('https://restcountries.eu/rest/v2/name/' + name).map(res => res.json());
  }

}
