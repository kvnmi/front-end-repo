import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import colors from '../../../utils/colors';
import BreadCrumb from '../../../components/shared/BreadCrumb';
import styles from './styles';

type Props = {
  title: string;
  children?: React.ReactNode;
  subTitle: string;
  size?: string;
};

type CustomProps = {
  title?: string;
  subTitle?: string;
  size?: string;
  [key: string]: any;
};

const CustomScreen: React.FC<CustomProps> = ({
  title,
  subTitle,
  size,
  children,
}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.customDark} />
      <BreadCrumb
        title={title && title}
        subTitle={subTitle && subTitle}
        size={size ? size : 'small'}
      />
      <View style={styles.content}>{children && children}</View>
    </SafeAreaView>
  );
};

export default CustomScreen;
