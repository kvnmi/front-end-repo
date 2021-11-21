import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

type TextProps = {
  fontSize?: number;
  color?: string;
  [key: string]: any;
};

const AppText: React.FunctionComponent<TextProps> = ({children, ...rest}) => {
  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
