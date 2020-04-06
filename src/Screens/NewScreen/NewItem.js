import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Linking,
} from 'react-native';
import colors from '../../Themes/colors';
import base from '../../Themes/base';
import fonts from '../../Themes/fonts';
import moment from 'moment';
const NewItem = ({ item }) => {
  let datePublishedItem = moment(item.publishedAt, 'YYYYMMDD').fromNow();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={async () => {
        // Actions.newDetail({article: item});
        await Linking.openURL(item.url);
      }}>
      <View style={styles.article}>
        <View style={styles.imagePart}>
          <Image
            style={styles.imageArticle}
            source={{ uri: item.urlToImage }}
          />
        </View>
        <View style={styles.contentPart}>
          <Text style={styles.titleArticle}>{item.title}</Text>
          <View style={styles.publishArticle}>
            <Text style={styles.siteName}>{item.siteName}</Text>
            <Text style={styles.date}>{datePublishedItem}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  article: {
    flexDirection: 'row',
    margin: 4,
    ...base.border,
    padding: 2,
  },
  imagePart: {
    flex: 2,
    marginRight: 10,
  },
  contentPart: {
    flex: 5,
    paddingRight: 10,
  },
  imageArticle: {
    height: 80,
    width: 100,
    borderRadius: 4,
  },
  titleArticle: {
    flex: 4,
    fontSize: fonts.md,
    color: colors.black,
    fontWeight: 'bold',
  },
  publishArticle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  siteName: {
    color: colors.blue,
  },
  date: {
    color: colors.green,
  },
});
export default NewItem;
