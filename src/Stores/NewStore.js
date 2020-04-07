import apiCorona from '../Services/ApiCorona';
import { action, observable } from 'mobx';
class NewStore {
	@observable listNews = [];
	@action async getListNews(offset, language) {
		try {
			const response = await apiCorona.getNewOfCountryByLanguage(
				offset,
				language,
			);
			if (response.status === 200 && response.data) {
				this.listNews = response.data.items;
			}
		} catch (e) {
			// console.log(e);
		}
	}
}
const newStore = new NewStore();
export default newStore;
