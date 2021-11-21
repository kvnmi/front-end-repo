import React from 'react';
import {View} from 'react-native';
import styles from './styles';

// const  Products =() => (
//     <View style={styles.product}>

//     </View>
// )

const OrderBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftLogo}>
        <View style={styles.logoPlaceholder} />
      </View>
      <View style={styles.rightContent}>
        {/* <View style={styles.products} /> */}
      </View>
    </View>
  );
};

export default OrderBox;
