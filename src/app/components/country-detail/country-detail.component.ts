import { Component, OnInit } from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {ActivatedRoute} from "@angular/router";
import {Country} from "../../models/country";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
  providers: [CountriesService]
})
export class CountryDetailComponent implements OnInit {

  code: string;
  country: any;
  actualTime: any;
  mapUrl: string;

  constructor(private _countriesService: CountriesService, private _route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.code = params['code'];
    });

    this._countriesService.getCountryByCode(this.code).subscribe(res => {
      this.country = res[0];

      this.mapUrl = "https://www.google.com/maps/embed/v1/view?key=AIzaSyB7bZLF_D3oHt2iti9-lNUOct_LJXzNsew&center=" +
        this.country.latlng[0] + "," + this.country.latlng[1] + "&zoom=5";

      this.actualTime = CountryDetailComponent.calcTime(this.country.timezones[0]);

    });
  }

  static calcTime(offset) {
    let timezone = offset.substring(4);
    let hours = parseInt(timezone.substring(0, 2));
    if (parseInt(timezone.substring(3, 5))) {
      hours += 0.5;
    }

    let d = new Date();
    let utc = d.getTime() - (d.getTimezoneOffset() * 60000);
    let nd = new Date(utc + (3600000 * hours));

    return nd.toLocaleString();
  }

}
