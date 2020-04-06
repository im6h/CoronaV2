import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import NewItem from './NewItem';
import { inject, observer } from 'mobx-react';
import colors from '../../Themes/colors';
@inject('newStore')
@observer
class NewScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      offset: 0,
      page: 1,
    };
  }
  async componentDidMount() {
    await this.fetchListNews();
  }

  /**
   * function support
   */
  fetchListNews = async () => {
    this.props.newStore.getListNews(this.state.offset, 'vi').then(() => {
      this.setState({
        isLoading: false,
      });
    });
  };
  loadPreNews = async () => {
    this.setState({
      isLoading: false,
      offset: this.state.offset - 9,
    });
    this.props.newStore.getListNews(this.state.offset - 9, 'vi').then(() => {
      this.setState({
        isLoading: false,
        page: this.state.page - 1,
      });
    });
  };
  loadNextNews = async () => {
    this.setState({
      isLoading: true,
      offset: this.state.offset + 9,
    });
    this.props.newStore.getListNews(this.state.offset + 9, 'vi').then(() => {
      this.setState({
        isLoading: false,
        page: this.state.page + 1,
      });
    });
  };

  /**
   * render view
   */
  renderFooter = () => {
    if (this.state.page === 1) {
      return (
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.button, [{ borderColor: 'transparent' }]]}
            onPress={async () => {
              await this.loadPreNews();
            }}>
            <Text>{''}</Text>
          </TouchableOpacity>
          <Text>{this.state.page}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await this.loadNextNews();
            }}>
            <Text style={styles.action}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await this.loadPreNews();
            }}>
            <Text style={styles.action}>Previous</Text>
          </TouchableOpacity>
          <Text>{this.state.page}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await this.loadNextNews();
            }}>
            <Text style={styles.action}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          onRefresh={() => {}}
          refreshing={this.state.isLoading}
          extraData={this.props.newStore.listNews}
          ListFooterComponent={this.renderFooter()}
          keyExtractor={({ item }, index) => index.toString()}
          data={this.props.newStore.listNews}
          renderItem={({ item }) => {
            return <NewItem item={item} />;
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  action: {
    color: colors.blue,
    textDecorationLine: 'underline',
  },
});
export default NewScreen;
