import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ItemRow from './ItemRow';
class TableStatsCountry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tableContent}>
          <FlatList
            {...this.props}
            data={this.props.statsGlobalTopCountry}
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
  },
  tableContent: {
    flex: 1,
  },
});
export default TableStatsCountry;
