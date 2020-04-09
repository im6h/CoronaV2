import { observable, action } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
class LanguageStore {
  @observable language = '';
  @action async readLanguageFromStorage() {
    try {
      const language = await AsyncStorage.getItem('language');
      if (language !== null) {
        this.language = language;
      } else {
        this.language = 'en';
      }
    } catch (e) {
      console.log(e);
    }
  }
  @action async storeLanguageToStorage(language) {
    try {
      this.language = language;
      AsyncStorage.setItem('language', language);
    } catch (e) {
      console.log(e);
    }
  }
}
const languageStore = new LanguageStore();
export default languageStore;
