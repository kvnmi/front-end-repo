import React from 'react';
import {View} from 'react-native';
import AppText from '../../../../../components/shared/AppText';
import styles from './styles';

const OrderBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.bigTitle}>ORDERS</AppText>
      <View style={styles.rowCount}>
        <View style={styles.rowContainer}>
          <AppText style={styles.count}> 0 </AppText>
          <AppText style={styles.smallTitle}>Total Orders</AppText>
        </View>
        <View style={styles.rowContainer}>
          <AppText style={styles.count}> 0 </AppText>
          <AppText style={styles.smallTitle}>Total Orders</AppText>
        </View>
      </View>
    </View>
  );
};

export default OrderBox;
