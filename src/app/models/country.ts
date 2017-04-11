import {Language} from "./language";
import {Currency} from "./currency";

export class Country {
  name: string;
  languages: Language[];
  currencies: Currency[];
  capital: string;
  timezones: string[];
  alpha3Code: string;
  latlng: number[];
}
