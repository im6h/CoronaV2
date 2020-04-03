import apiCorona from '../Services/ApiCorona';
import {action, observable} from 'mobx';
class StatsStore {
  @observable statsGlobal = {};
  @observable statsTopCountry = [];
  @observable statsCountryByCode = {};
  @observable statsCountryByCodeAndDate = [];

  @action async getStatsGlobal() {
    try {
      const response = await apiCorona.getStatsGlobal();
      if (response.status === 200 && response.data) {
        this.statsGlobal = response.data;
      }
    } catch (e) {
      // console.log(e);
    }
  }

  @action async getStatsTopCountry() {
    try {
      const response = await apiCorona.getStatsGlobalTopCountry();
      if (response.status === 200 && response.data) {
        this.statsTopCountry = response.data;
      }
    } catch (e) {
      // console.log(e);
    }
  }

  @action async getStatsCountryByCode(countryCode) {
    try {
      const response = await apiCorona.getStatsCountryByCode(countryCode);
      if (response.status === 200 && response.data) {
        this.statsCountryByCode = response.data[0];
      }
    } catch (e) {
      // console.log(e);
    }
  }

  @action async getStatsCountryByCodeAndDate(countryCode) {
    try {
      const response = await apiCorona.getStatsCountryByCodeAndDate(
        countryCode,
      );
      if (response.status === 200 && response.data) {
        this.statsCountryByCodeAndDate = response.data;
      }
    } catch (e) {
      // console.log(e);
    }
  }
}
const statsStore = new StatsStore();
export default statsStore;
