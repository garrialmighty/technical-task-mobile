import React, { Component } from 'react';
import { SafeAreaView, FlatList, TextInput } from 'react-native';
import OffPisteCell from '../../components/OffPisteCell';
import styles from './styles';

// TODO: - load static data using Redux in preparation for backend service
import OffPisteData from '../../../off-pistes.json';

// TOOD: - move to a separate screen
import PisteMapView from '../OffPisteMapScreen';

export default class OffPisteScreen extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      filteredPisteData: [],
      selected: undefined,
    };
  }

  renderItem = ({ item }) => (
    <OffPisteCell
      data={item}
      onPress={() => this.setState({
        selected: item
      })}
    />
  );

  filter = (text) => {
    const searchText = text.toLowerCase();
    const filteredPisteData = OffPisteData.filter(d => d.name.toLowerCase().includes(searchText));

    this.setState({
      searchText,
      filteredPisteData
    });
  };

  render() {
    const { selected, searchText, filteredPisteData } = this.state;
    const data = searchText === '' ? OffPisteData : filteredPisteData;
    return (
      selected === undefined ? (
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
      ) : (
        <PisteMapView styles={styles.container} siteData={selected} />
      )
    );
  }
}
