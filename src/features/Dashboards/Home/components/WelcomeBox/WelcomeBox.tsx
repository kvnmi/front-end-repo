import React from 'react';
import {View} from 'react-native';
import AppText from '../../../../../components/shared/AppText';
import styles from './styles';

const WelcomeBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.bigTitle}>
        Welcome to a new shopping {'\n'}experience
      </AppText>
      <AppText style={styles.smallTitle}>Never run out of Stock.</AppText>
    </View>
  );
};

export default WelcomeBox;
