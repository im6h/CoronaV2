import axios from 'axios';
class ApiCorona {
	/**
	 *  stats global
	 */
	async getStatsGlobal() {
		return axios.get(
			'https://api.coronatracker.com/v3/stats/worldometer/global',
		);
	}

	/**
	 * stats global top county
	 */
	async getStatsGlobalTopCountry() {
		return axios.get(
			'https://api.coronatracker.com/v3/stats/worldometer/topCountry',
		);
	}

	/**
	 *  stats detail country by country-code
	 */
	async getStatsCountryByCode(countryCode) {
		return axios.get(
			`https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=${countryCode}`,
		);
	}

	/**
	 * stats detail country by country-code and date
	 */
	async getStatsCountryByCodeAndDate(countryCode, startDate, endDate) {
		return axios.get(
			`https://api.coronatracker.com/v3/analytics/trend/country?countryCode=${countryCode}&startDate=${startDate}&endDate=${endDate}`,
		);
	}

	/**
	 * get news of country by language ( offset once time increment 9)
	 */
	async getNewOfCountryByLanguage(offset, language) {
		return axios.get(
			`https://api.coronatracker.com/news/trending?limit=9&offset=${offset}&language=${language}`,
		);
	}

	/**
	 * get travel alert from any country of global
	 */
	async getTravelAlert() {
		return axios.get('https://api.coronatracker.com/v1/travel-alert');
	}
}
const apiCorona = new ApiCorona();
export default apiCorona;
