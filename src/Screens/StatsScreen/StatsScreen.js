/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Flag from 'react-native-flags';
import fonts from '../../Themes/fonts';
import colors from '../../Themes/colors';
import base from '../../Themes/base';
import {inject, observer} from 'mobx-react';
import accounting from 'accounting';
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
    let confirmed = accounting.formatNumber(
      this.props.statsStore.statsCountryByCode.totalConfirmed,
    );
    let deaths = accounting.formatNumber(
      this.props.statsStore.statsCountryByCode.totalDeaths,
    );
    let recovered = accounting.formatNumber(
      this.props.statsStore.statsCountryByCode.totalRecovered,
    );
    let dailyConfirmed = accounting.formatNumber(
      this.props.statsStore.statsCountryByCode.dailyConfirmed,
    );
    let dailyDeaths = accounting.formatNumber(
      this.props.statsStore.statsCountryByCode.dailyDeaths,
    );
    const data =
      !_.isEmpty(this.props.statsStore.statsCountryByCodeAndDate) &&
      this.props.statsStore.statsCountryByCodeAndDate;

    let confirmedLine = _.map(data, element => {
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
    let deathsLine = _.map(data, element => {
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
    let recoveredLine = _.map(data, element => {
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
                {confirmed}
              </Text>
              <Text>Cofirmed</Text>
              <Text
                style={{
                  color: colors.red,
                  fontSize: fonts.sm,
                }}>
                + {dailyConfirmed} since yesterday
              </Text>
            </View>
            <View style={[styles.column]}>
              <Text
                style={{
                  color: colors.green,
                  fontSize: fonts.md,
                  fontWeight: 'bold',
                }}>
                {recovered}
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
                {deaths}
              </Text>
              <Text>Deaths</Text>
              <Text
                style={{
                  color: colors.gray,
                  fontSize: fonts.sm,
                }}>
                + {dailyDeaths} since yesterday
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.chart}>
          <View style={styles.chartCountry}>
            {data && <PureChart data={sampleData} type="line" />}
          </View>
          <View style={styles.talbeCountry}></View>
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
    ...base.border,
  },
  chartCountry: {
    flex: 3,
    paddingRight: 10,
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  talbeCountry: {
    flex: 3,
  },
});
export default StatsScreen;
