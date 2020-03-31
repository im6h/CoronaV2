import React from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';

class NewScreenDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount(): void {}

  /**
   * function support
   */
  /**
   * render view
   */
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imagePart}>
            <Image
              style={styles.image}
              source={{uri: this.props.article.urlToImage}}
            />
          </View>
          <View style={styles.contentPart}>
            <Text style={styles.textContent}>{this.props.article.content}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagePart: {
    flex: 2,
  },
  image: {
    height: 100,
    width: 180,
  },
  contentPart: {
    flex: 8,
  },
  textContent: {},
});
export default NewScreenDetail;
