import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TableStatsCountry from './TableStatsCountry';
import fonts from '../../Themes/fonts';
import base from '../../Themes/base';
import colors from '../../Themes/colors';
import {observer, inject} from 'mobx-react';
@inject('statsStore')
@observer
class LaunchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.statsStore.statsGlobal,
    };
  }
  async componentDidMount(): void {
    await this.fetchStatsGlobal();
    await this.fetchStatsTopCountry();
  }

  /**
   * function support
   */

  fetchStatsGlobal = async () => {
    await this.props.statsStore.getStatsGlobal();
  };
  fetchStatsTopCountry = async () => {
    await this.props.statsStore.getStatsTopCountry();
  };
  /**
   * render view
   * @return {*}
   */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statsGlobal}>
          <View style={styles.confirmCard}>
            <Text style={[styles.textNumber, [{color: colors.red}]]}>
              {this.state.number.totalConfirmed}
            </Text>
            <Text>Confirm</Text>
          </View>
          <View style={styles.deathCard}>
            <Text style={[styles.textNumber, [{color: colors.gray}]]}>
              {this.state.number.totalDeaths}
            </Text>
            <Text>Death</Text>
          </View>
          <View style={styles.recoveredCard}>
            <Text style={[styles.textNumber, [{color: colors.green}]]}>
              {this.state.number.totalRecovered}
            </Text>
            <Text>Recovered</Text>
          </View>
        </View>
        <View style={styles.statsTable}>{/*<TableStatsCountry />*/}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statsGlobal: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 4,
  },
  statsTable: {
    flex: 8,
  },
  confirmCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...base.border,
  },
  deathCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...base.border,
  },
  recoveredCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...base.border,
  },
  textNumber: {
    fontSize: fonts.xl,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
export default LaunchScreen;
