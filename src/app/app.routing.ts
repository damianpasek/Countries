import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {SearchComponent} from "./components/search/search.component";
import {CountryDetailComponent} from "./components/country-detail/country-detail.component";

const appRoutes : Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'country/:code',
    component: CountryDetailComponent
  }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
