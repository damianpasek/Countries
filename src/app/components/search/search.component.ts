import { Component, OnInit } from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {Country} from "../../models/country";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [CountriesService]
})
export class SearchComponent implements OnInit {

  searchString: string;
  countries: Country[];

  constructor(private _countriesService: CountriesService) { }

  ngOnInit() {
    this._countriesService.getAllCountries().subscribe(res => {
      this.countries = res;
    });
  }

  searchCountries() {
    if (this.searchString) {
      this._countriesService.getCountriesByName(this.searchString).subscribe(res => {
        this.countries = res;
      });
    } else {
      this.ngOnInit();
    }

  }

}
