import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Country} from "../models/country";

@Injectable()
export class CountriesService {

  constructor(private _http : Http) { }

  getAllCountries() {
    return this._http.get('https://restcountries.eu/rest/v2/all').map(res => res.json());
  }

  getCountriesByName(name: string) {
    return this._http.get('https://restcountries.eu/rest/v2/name/' + name).map(res => res.json());
  }

  getCountriesByFullName(name: string) {
    return this._http.get('https://restcountries.eu/rest/v2/name/' + name + '?fullText=true').map(res => res.json());
  }

  getCountriesByCodes(codes: string) {
    return this._http.get('https://restcountries.eu/rest/v2/alpha?codes=' + codes).map(res => res.json());
  }

  getCountriesCustom(type: string, text: string) {
    if (type == 'fullname') {
      return this.getCountriesByFullName(text);
    } else if (type == 'codeslist') {
      return this.getCountriesByCodes(text);
    } else {
      return this._http.get('https://restcountries.eu/rest/v2/' + type+ '/' + text).map(res => res.json());
    }
  }

  getCountryByCode(code: string) {
    return this._http.get('https://restcountries.eu/rest/v2/alpha?codes=' + code).map(res => res.json());
  }

}
