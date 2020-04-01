import apiCorona from '../Services/ApiCorona';
import {observable, action} from 'mobx';
class TravelStore {
  @observable listTravelAlert = [];
  @action async getListTravelAlert() {
    try {
      const response = await apiCorona.getTravelAlert();
      if (response.status === 200 && response.data) {
        this.listTravelAlert = response.data;
      }
    } catch (e) {
      // console.log(e);
    }
  }
}
const travelStore = new TravelStore();
export default travelStore;
