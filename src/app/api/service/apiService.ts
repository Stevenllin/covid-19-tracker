import axios from 'axios';
import { GetV3Covid19AllResp } from 'app/api/model/get/getV3Covid19All';
import { GetV3Covid19CountriesResp } from 'app/api/model/get/getV3Covid19Countries'
import { GetV3CovidCountriesCountryResp } from 'app/api/model/get/getV3Covid19CountriesCountry';

/* eslint-disable-next-line import/no-anonymous-default-export */ 
export default {
  /**
   * @description [GET] get global COIVD-19 totals for today, yestaurant ant two days ago
  */
  getV3Covid19All: async () => {
    return axios.get<GetV3Covid19AllResp>('/v3/covid-19/all', {})
      .then((response) => response.data)
  },
  /**
   * @description [GET] get COIVD-19 totals for all countries
  */
  getV3Covid19Countries: async() => {
    return axios.get<GetV3Covid19CountriesResp[]>('/v3/covid-19/countries', {})
      .then((response) => response.data)
  },
  /**
   * @description [GET] get COIVD-19 totals for a specific country
  */
  getV3Covid19CountriesCountry: async(country: string) => {
    return axios.get<GetV3CovidCountriesCountryResp>(`/v3/covid-19/countries/${country}`, {})
      .then((response) => response.data)
  },
  /**
   * @description [GET] get total global COIVD-19 vaccine doses administered 
  */
  getV3Covid19VaccineCoverage: async(lastdays: number) => {
    return axios.get(`/v3/covid-19/vaccine/coverage?lastdays=${lastdays}`, {})
      .then((response) => response.data)
  }
}
