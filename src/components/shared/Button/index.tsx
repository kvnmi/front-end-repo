import * as React from 'react';
import colors from '../../../utils/colors';
import styles from './styles';
import NavigationService from '../../../navigation/NavigationService';
import {TouchableOpacity} from 'react-native';
import {RFValue as wp} from 'react-native-responsive-fontsize';
import AppText from '../AppText';
type AppButtonProp = {
  text: string;
  textcolor?: string;
  bgcolor?: string;
  navigationTo?: string;
  widt?: any;
  method?: Function;
};

const AppButton: React.FC<AppButtonProp> = ({
  text,
  textcolor,
  bgcolor,
  widt,
  navigationTo,
  method,
}) => (
  <TouchableOpacity
    style={[
      styles.buttons,
      {
        backgroundColor: bgcolor ? bgcolor : colors.orange,
        width: widt ? widt : wp(333),
      },
    ]}
    onPress={() =>
      navigationTo
        ? NavigationService.navigate(navigationTo)
        : method
        ? method()
        : console.log('here')
    }>
    <AppText
      style={[styles.text, {color: textcolor ? textcolor : colors.white}]}>
      {' '}
      {text && text}{' '}
    </AppText>
  </TouchableOpacity>
);

export default AppButton;
