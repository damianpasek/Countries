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
  searchType: string = "name";
  countries: Country[];

  searchTypes = [
    {value: "name", name: "Name", default: true},
    {value: "fullname", name: "Full Name"},
    {value: "currency", name: "Currency"},
    {value: "capital", name: "Capital"},
    {value: "region", name: "Region"},
    {value: "callingcode", name: "Calling Code"},
    {value: "codeslist", name: "List of Codes"},
    {value: "lang", name: "Language"},
  ];

  constructor(private _countriesService: CountriesService) { }

  ngOnInit() {
    this._countriesService.getAllCountries().subscribe(data => {
      this.countries = data;
    });
  }

  searchCountries() {
    if (this.searchString) {
      this._countriesService.getCountriesCustom(this.searchType, this.searchString).subscribe(data => {
        this.countries = data;
      }, error => {
        this.countries = null;
      });
    } else {
      this.ngOnInit();
    }
  }

}
