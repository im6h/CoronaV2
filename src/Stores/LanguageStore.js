import { observable, action } from 'mobx';
import I18n from '../Language/i18n';
class LanguageStore {
  @observable language = 'en';
  @action changeLanguage(language) {
    this.language = language;
    I18n.locale = this.language;
  }
}
const languageStore = new LanguageStore();
export default languageStore;
