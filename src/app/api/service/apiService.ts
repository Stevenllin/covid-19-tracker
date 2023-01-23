import axios from 'axios';

/* eslint-disable-next-line import/no-anonymous-default-export */ 
export default {
  /**
   * @description [GET] get global COIVD-19 totals for today, yestaurant ant two days ago
  */
  getV3Covid19All: async () => {
    return axios.get('/v3/covid-19/all', {})
      .then((response) => response.data)
  }
}
