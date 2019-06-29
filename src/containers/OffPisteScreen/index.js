import React, { Component } from 'react';
import { SafeAreaView, FlatList, TextInput } from 'react-native';
import OffPisteCell from '../../components/OffPisteCell';
import styles from './styles';

// TODO: - load static data to Redux store
import OffPisteData from '../../../off-pistes.json';

export default class OffPisteScreen extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      filteredPisteData: []
    };
  }

  renderItem = ({ item }) => {
    const { navigation: { navigate } } = this.props;
    return (
      <OffPisteCell
        data={item}
        onPress={() => navigate('Map', {
          item
        })}
      />
    );
  };

  filter = (text) => {
    const searchText = text.toLowerCase();
    const filteredPisteData = OffPisteData.filter(d => d.name.toLowerCase().includes(searchText));

    this.setState({
      searchText,
      filteredPisteData
    });
  };

  render() {
    const { searchText, filteredPisteData } = this.state;
    const data = searchText === '' ? OffPisteData : filteredPisteData;
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.searchField}
          onChangeText={this.filter}
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FlatList
          data={data}
          keyExtractor={({ id }) => `${id}`}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}
