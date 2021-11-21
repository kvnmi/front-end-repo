import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

import colors from '../../../utils/colors';
import {
  RFPercentage as hp,
  RFValue as wp,
} from 'react-native-responsive-fontsize';

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
  goRegister: ViewStyle;
  errorMessage: TextStyle;
  formContainer: ViewStyle;
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
    marginTop: hp(16),
    paddingTop: hp(2),
    height: hp(90),
    paddingLeft: wp(15),
    marginLeft: wp(5),
    width: '100%',
  },
  errorMessage: {
    color: colors.error,
    textAlign: 'center',
  },

  input: {
    marginTop: hp(5),
    height: hp(90),
  },
  button: {
    height: hp(7.5),
    borderRadius: 4,
    marginTop: hp(2),
    width: '95%',
    marginBottom: hp(4),
    color: colors.white,
    borderColor: colors.orange,
    backgroundColor: colors.orange,
    borderWidth: wp(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alreadyHasAccount: {
    textAlign: 'center',
  },
  loginLink: {
    color: colors.orange,
  },
  formContainer: {
    backgroundColor: colors.skyBlue,
    height: hp(100),
  },
  goRegister: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: wp(60),
  },
});

export default styles;
