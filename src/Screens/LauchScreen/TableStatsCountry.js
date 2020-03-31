import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ItemRow from './ItemRow';
import {inject, observer} from 'mobx-react';
class TableStatsCountry extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tableHeader}>
          <View>
            <Text>Country</Text>
          </View>
          <View>
            <Text>Confirmed</Text>
          </View>
          <View>
            <Text>Deaths</Text>
          </View>
          <View>
            <Text>Recovered</Text>
          </View>
        </View>
        <View style={styles.tableContent}>
          <FlatList
            data={this.props.statsStore.statsTopCountry}
            extraData={() => {}}
            keyExtractor={({item}, index) => index.toString()}
            renderItem={({item}) => {
              return <ItemRow item={item} />;
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  tableHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tableContent: {
    flex: 8,
  },
});
export default TableStatsCountry;
