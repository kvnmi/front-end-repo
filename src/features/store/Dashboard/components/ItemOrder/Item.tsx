import React from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from '../../../../../components/shared/AppText';
import NavigationService from '../../../../../navigation/NavigationService';
import styles from './styles';

type ItemBoxProps = {
  title: string;
  navigateTo: string;
};

const ItemBox: React.FC<ItemBoxProps> = ({title, navigateTo}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => NavigationService.navigate(navigateTo)}>
      <AppText style={styles.bigTitle}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default ItemBox;
