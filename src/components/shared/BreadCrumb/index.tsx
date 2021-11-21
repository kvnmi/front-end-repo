import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import BackArrow from '../BackArrow';
import {RFPercentage as hp} from 'react-native-responsive-fontsize';
import AppText from '../AppText';

type Prop = {
  title: string;
  subTitle: string;
  size?: string;
  icons?: any;
  rest?: React.ReactNode;
};

const BreadCrumb = ({title, subTitle, size, icons, ...rest}: Prop) => {
  return (
    <View
      style={[styles.container, {height: size === 'big' ? hp(27) : hp(14)}]}
      {...rest}>
      <BackArrow />
      <View style={styles.rowContainer}>
        <View style={styles.left}>
          <AppText style={size === 'big' ? styles.bigTitle : styles.title}>
            {title && title}
          </AppText>
          <AppText style={styles.subTitle}>{subTitle && subTitle}</AppText>
        </View>
        <View style={styles.icons}>
          {icons ? <Image source={icons} /> : null}
        </View>
      </View>
    </View>
  );
};

export default BreadCrumb;
