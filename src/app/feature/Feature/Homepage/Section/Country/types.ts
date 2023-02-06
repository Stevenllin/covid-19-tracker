export interface FormValues {
  selectedCountry: string;
}

export interface CountryInfo {
  country: string;
  population: number;
  continent: string;
  cases: number;
  casesPerOneMillion: number;
  todayCases: number;
  deaths: number;
  deathsPerOneMillion: number;
  todayDeaths: number;
  recovered: number;
  recoveredPerOneMillion: number;
  todayRecovered: number;
  countryInfo: {
    flag: string;
    lat: number;
    long: number;
  }
}