import React, { Component } from 'react';
import { requireNativeComponent, SafeAreaView, Text } from 'react-native';
import styles from './styles';

const PisteMap = requireNativeComponent('PisteMapView');

export default class PisteMapView extends Component {
  render() {
    const { navigation: { getParam } } = this.props;
    const { geo_data } = getParam('item', {});
    const data = geo_data || {};
    const hasCoordinates = Object.prototype.hasOwnProperty.call(data, 'coordinates');
    return hasCoordinates
      ? (<PisteMap style={styles.container} points={data.coordinates} />)
      : (
        <SafeAreaView style={styles.container}>
          <Text>This site has no path coordinates</Text>
        </SafeAreaView>
      );
  }
}
