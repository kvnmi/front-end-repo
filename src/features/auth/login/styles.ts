import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

import colors from '../../../utils/colors';
import {
  RFPercentage as hp,
  RFValue as wp,
} from 'react-native-responsive-fontsize';
import fonts from '../../../utils/fonts';

type Style = {
  container: ViewStyle;
  login: ViewStyle;
  forgot: ViewStyle;
  labelStyle: ViewStyle;
  content: ViewStyle;
  button: ViewStyle;
  input: ViewStyle;
  alreadyHasAccount: ViewStyle;
  loginLink: TextStyle;
  forgotPassword: TextStyle;
  goRegister: ViewStyle;
  goToForgotten: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  login: {
    padding: 8,
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
  content: {
    backgroundColor: colors.skyBlue,
    top: hp(24),
    height: hp(100),
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginTop: hp(12),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: hp(8),
    elevation: 0,
  },
  alreadyHasAccount: {
    textAlign: 'center',
    fontFamily: fonts.RalewayMedium,
  },
  loginLink: {
    color: colors.orange,
    fontFamily: fonts.RalewayMedium,
  },
  forgotPassword: {
    marginLeft: wp(150),
    color: colors.orange,
    marginTop: hp(-2),
  },
  goRegister: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: wp(60),
  },
  goToForgotten: {
    height: hp(3),
    marginTop: hp(-2),
    left: wp(110),
    display: 'flex',
    alignItems: 'flex-end',
  },
});

export default styles;
