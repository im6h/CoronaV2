import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import fonts from '../../Themes/fonts';
import colors from '../../Themes/colors';
import base from '../../Themes/base';
import IconIonIcon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import I18n from '../../Language/i18n';
import { inject, observer } from 'mobx-react';
@inject('languageStore')
@observer
class SettingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      visiable: false,
    };
  }
  /**
   * function support
   */
  setModalVisiable = (visiable) => {
    this.setState({
      visiable: visiable,
    });
  };
  setLanguage = (language) => {
    this.setState({
      language: language,
    });
    this.props.languageStore.changeLanguage(language);
  };
  /**
   * render view
   */
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.visiable}
          onRequestClose={() => {}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <TouchableOpacity
                  style={styles.itemLanguage}
                  onPress={() => {
                    this.setLanguage('en');
                    this.setModalVisiable(false);
                  }}>
                  <Text>English</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.itemLanguage}
                  onPress={() => {
                    this.setLanguage('vi');
                    this.setModalVisiable(false);
                  }}>
                  <Text>Vietnamese</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.language}
          onPress={() => {
            this.setModalVisiable(true);
          }}>
          <Text style={styles.textTitle}>{I18n.t('language')}</Text>
          <View style={styles.selected}>
            <IconIonIcon name="ios-arrow-forward" size={25} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  language: {
    width: '100%',
    height: 60,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: fonts.lg,
    fontWeight: 'bold',
  },
  textLanguage: {
    fontSize: fonts.sm,
    fontWeight: '200',
    marginRight: 10,
  },
  selected: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    height: 100,
    width: 300,
    backgroundColor: 'white',
    ...base.border,
  },
  itemLanguage: {
    height: 50,
    width: 300,
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 0.3,
  },
});
export default SettingScreen;
