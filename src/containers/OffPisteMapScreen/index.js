import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { requireNativeComponent, Text } from 'react-native';

const PisteMap = requireNativeComponent('PisteMapView');

class PisteMapView extends Component {
  render() {
    const { styles, siteData: { geo_data } } = this.props;
    const data = geo_data || {
    };
    const hasCoordinates = Object.prototype.hasOwnProperty.call(data, 'coordinates');
    return hasCoordinates
      ? (<PisteMap style={styles} points={geo_data.coordinates} />)
      : (<Text>This site has no path coordinates</Text>);
  }
}

PisteMapView.propTypes = {
  /**
   * An array that contains an array of arrays which represent a piste path
   * Each contained array contains an array of coordinates
   */
  // TODO: - specify array shape
  siteData: PropTypes.object,
};

PisteMapView.defaultProps = {
  siteData: {
  }
};

export default PisteMapView;
