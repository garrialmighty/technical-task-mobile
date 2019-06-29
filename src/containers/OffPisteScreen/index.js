import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import OffPisteData from '../../../off-pistes.json';
import OffPisteCell from '../../components/OffPisteCell';
import styles from './styles';

export default class OffPisteScreen extends Component {
  renderItem = ({ item }) => (<OffPisteCell data={item} />);

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={OffPisteData}
          keyExtractor={({ id }) => `${id}`}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
