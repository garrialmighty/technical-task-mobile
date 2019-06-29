import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
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

  render() {
    const { selected } = this.state;
    return (
      selected === undefined ? (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={OffPisteData}
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
