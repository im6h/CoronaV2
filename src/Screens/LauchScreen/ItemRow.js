import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../Themes/colors';
import fonts from '../../Themes/fonts';
import Flag from 'react-native-flags';
import accounting from 'accounting';
const ItemRow = ({item}) => {
  let flag = item.countryCode;
  let confirmed = accounting.formatNumber(item.totalConfirmed);
  let deaths = accounting.formatNumber(item.totalDeaths);
  let recovered = accounting.formatNumber(item.totalRecovered);
  return (
    <View style={styles.container}>
      <View style={styles.columnCountry}>
        <Flag code={flag} size={32} />
        <Text style={styles.textCountry}>{item.country}</Text>
      </View>
      <View style={styles.columnText}>
        <Text style={[styles.textNumber, [{color: colors.red}]]}>
          {confirmed}
        </Text>
      </View>
      <View style={styles.columnText}>
        <Text style={[styles.textNumber, [{color: colors.gray}]]}>
          {deaths}
        </Text>
      </View>
      <View style={styles.columnText}>
        <Text style={[styles.textNumber, [{color: colors.green}]]}>
          {recovered}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 2,
    borderWidth: 0.3,
    borderRadius: 4,
    padding: 8,
    borderColor: colors.gray,
  },
  image: {
    height: 40,
    width: 60,
  },
  columnCountry: {
    flex: 0.8,
    marginLeft: 10,
  },
  columnText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  textNumber: {
    fontSize: fonts.md,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textCountry: {
    fontSize: fonts.sm,
    fontWeight: 'normal',
    textAlign: 'left',
  },
});
export default ItemRow;
