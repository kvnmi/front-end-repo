import React from 'react';
import {View} from 'react-native';
import AppText from '../../../../../components/shared/AppText';
import styles from './styles';

const Separator = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>29 Mar 2021</AppText>
    </View>
  );
};

export default Separator;
