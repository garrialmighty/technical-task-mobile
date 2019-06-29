import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class OffPisteCell extends PureComponent {
  render() {
    const { onPress, data: { name, description } } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text>{description}</Text>
          <View style={styles.separator} />
        </View>
      </TouchableOpacity>
    );
  }
}

OffPisteCell.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string
  }),
  onPress: PropTypes.func
};

OffPisteCell.defaultProps = {
  data: {
    name: '',
    description: ''
  },
  onPress: () => {}
};

export default OffPisteCell;
