/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Flag from 'react-native-flags';
import fonts from '../../Themes/fonts';
import colors from '../../Themes/colors';
import base from '../../Themes/base';
import { inject, observer } from 'mobx-react';
import accounting from 'accounting';
import moment from 'moment';
import _ from 'lodash';
import PureChart from 'react-native-pure-chart';

@inject('statsStore')
@observer
class StatsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    await this.fetchStatsCountryByCode();
    await this.fetchStatsCountryByCodeAndDate();
  }

  /**
   * function support
   */
  fetchStatsCountryByCode = async () => {
    await this.props.statsStore.getStatsCountryByCode(
      this.props.country.countryCode,
    );
  };
  fetchStatsCountryByCodeAndDate = async () => {
    await this.props.statsStore.getStatsCountryByCodeAndDate(
      this.props.country.countryCode,
      moment(moment().subtract(14, 'days').calendar()).format('YYYY-MM-DD'),
      moment().format('YYYY-MM-DD'),
    );
  };
  /**
   * render view
   * @return {*}
   */
  render() {
    /**
     * init value
     */
    let flag = this.props.country.countryCode;
    let country = this.props.country.country;
    let confirmed = this.props.statsStore.statsCountryByCode.totalConfirmed;
    let deaths = this.props.statsStore.statsCountryByCode.totalDeaths;
    let recovered = this.props.statsStore.statsCountryByCode.totalRecovered;
    let dailyConfirmed = this.props.statsStore.statsCountryByCode
      .dailyConfirmed;
    let dailyDeaths = this.props.statsStore.statsCountryByCode.dailyDeaths;
    let totalCrit = this.props.statsStore.statsCountryByCode.totalCritical;
    let totalConfirmedPopulation = this.props.statsStore.statsCountryByCode
      .totalConfirmedPerMillionPopulation;
    let activeCase = this.props.statsStore.statsCountryByCode.activeCases;
    const data =
      !_.isEmpty(this.props.statsStore.statsCountryByCodeAndDate) &&
      this.props.statsStore.statsCountryByCodeAndDate;

    let confirmedLine = _.map(data, (element) => {
      return _.assign(
        {
          x: element.last_updated.slice(5, 10),
          y: element.total_confirmed,
        },
        _.omit(
          element,
          'last_updated',
          'total_deaths',
          'country_code',
          'total_recovered',
          'total_confirmed',
          'country',
        ),
      );
    });
    let deathsLine = _.map(data, (element) => {
      return _.assign(
        {
          x: element.last_updated.slice(5, 10),
          y: element.total_deaths,
        },
        _.omit(
          element,
          'last_updated',
          'total_deaths',
          'country_code',
          'total_recovered',
          'total_confirmed',
          'country',
        ),
      );
    });
    let recoveredLine = _.map(data, (element) => {
      return _.assign(
        {
          x: element.last_updated.slice(5, 10),
          y: element.total_recovered,
        },
        _.omit(
          element,
          'last_updated',
          'total_deaths',
          'country_code',
          'total_recovered',
          'total_confirmed',
          'country',
        ),
      );
    });
    const sampleData = [
      {
        seriesName: 'series1',
        data: confirmedLine,
        color: colors.red,
      },
      {
        seriesName: 'series2',
        data: deathsLine,
        color: colors.gray,
      },
      {
        seriesName: 'series3',
        data: recoveredLine,
        color: colors.green,
      },
    ];

    /**
     * return view
     */
    return (
      <ScrollView style={styles.container}>
        <View style={styles.overview}>
          <View style={styles.country}>
            <Flag code={flag} size={48} />
            <Text style={styles.countryName}>{country} Overview Stats</Text>
          </View>
          <View style={styles.countryStats}>
            <View style={[styles.column]}>
              <Text
                style={{
                  color: colors.red,
                  fontSize: fonts.md,
                  fontWeight: 'bold',
                }}>
                {accounting.formatNumber(confirmed)}
              </Text>
              <Text>Cofirmed</Text>
              <Text
                style={{
                  color: colors.red,
                  fontSize: fonts.ssm,
                }}>
                + {accounting.formatNumber(dailyConfirmed)} since yesterday
              </Text>
            </View>
            <View style={[styles.column]}>
              <Text
                style={{
                  color: colors.green,
                  fontSize: fonts.md,
                  fontWeight: 'bold',
                }}>
                {accounting.formatNumber(recovered)}
              </Text>
              <Text>Recovered</Text>
            </View>
            <View style={[styles.column]}>
              <Text
                style={{
                  color: colors.gray,
                  fontSize: fonts.md,
                  fontWeight: 'bold',
                }}>
                {accounting.formatNumber(deaths)}
              </Text>
              <Text>Deaths</Text>
              <Text
                style={{
                  color: colors.gray,
                  fontSize: fonts.ssm,
                }}>
                + {accounting.formatNumber(dailyDeaths)} since yesterday
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.chart}>
          <View style={styles.tableCountry}>
            <View style={styles.tableCrit}>
              <Text>Critical Cases treated in ICU</Text>
              <Text style={styles.textNumber}>
                {accounting.formatNumber(totalCrit)}
              </Text>
              <Text style={styles.percent}>
                {accounting.toFixed((totalCrit * 100) / confirmed, 2)}%
                <Text style={{ color: 'black' }}> totals cases</Text>
              </Text>
            </View>
            <View style={styles.tableCrit}>
              <Text>Daily Confirmed Cases</Text>
              <Text style={styles.textNumber}>
                {accounting.formatNumber(totalConfirmedPopulation)}
              </Text>
            </View>
            <View style={styles.tableCrit}>
              <Text>Daily Cases Receiving Treatment</Text>
              <Text style={styles.textNumber}>
                {accounting.formatNumber(activeCase)}
              </Text>
              <Text style={styles.percent}>
                {accounting.toFixed((activeCase * 100) / confirmed, 2)}%
                <Text style={{ color: 'black' }}> totals cases</Text>
              </Text>
            </View>
          </View>
          <View style={styles.chartCountry}>
            {data && <PureChart data={sampleData} type="line" />}
            <View style={styles.chartDetail}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    backgroundColor: colors.red,
                    marginRight: 4,
                  }}
                />
                <Text>Confirmed</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    backgroundColor: colors.gray,
                    marginRight: 4,
                  }}
                />
                <Text>Deaths</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    backgroundColor: colors.green,
                    marginRight: 4,
                  }}
                />
                <Text>Recovered</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  overview: {
    flex: 2,
    justifyContent: 'center',
    ...base.border,
  },
  country: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  countryName: {
    fontSize: fonts.lg,
    fontWeight: 'bold',
  },
  countryStats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 5,
  },
  column: {
    alignItems: 'center',
  },
  chart: {
    flex: 7,
  },
  chartCountry: {
    flex: 3,
    ...base.border,
    paddingRight: 10,
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  tableCountry: {
    flex: 3,
  },
  chartDetail: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tableCrit: {
    flex: 1,
    flexDirection: 'column',
    ...base.border,
    padding: 10,
    alignItems: 'center',
  },
  textNumber: {
    fontWeight: 'bold',
    fontSize: fonts.xl,
  },
  percent: {
    color: colors.red,
  },
});
export default StatsScreen;
