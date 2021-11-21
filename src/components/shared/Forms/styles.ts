import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import colors from '../../../utils/colors';
import {
  RFPercentage as hp,
  RFValue as wp,
} from 'react-native-responsive-fontsize';
import fonts from '../../../utils/fonts';

type Style = {
  input: ViewStyle;
  label: TextStyle;
  errorMessage: TextStyle;
  textLabel: TextStyle;
};

const styles = StyleSheet.create<Style>({
  input: {
    width: wp(330),
    height: hp(6),
    color: colors.black,
    borderColor: 'black',
    paddingBottom: hp(2),
    marginTop: hp(1),
    fontFamily: fonts.RalewayMedium,
  },
  label: {
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18,
    paddingBottom: hp(1),
  },
  textLabel: {},
  errorMessage: {
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: fonts.RalewayMedium,
    color: colors.error,
    marginTop: -15,
  },
});

export default styles;
