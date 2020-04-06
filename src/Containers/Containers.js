import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigations from './Navigations';
import I18n from '../Language/i18n';
import { inject, observer } from 'mobx-react';
@inject('languageStore')
@observer
class Containers extends React.Component {
  async componentDidMount() {
    this.props.languageStore.readLanguageFromStorage().then(() => {
      I18n.locale = this.props.languageStore.language;
    });
  }
  /**
   * function support
   */

  /**
   * render view
   */
  render() {
    return (
      <View style={styles.container}>
        <Navigations />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Containers;
