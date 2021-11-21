import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import colors from '../../../utils/colors';
import {
  RFPercentage as hp,
  RFValue as wp,
} from 'react-native-responsive-fontsize';
import fonts from '../../../utils/fonts';

type Style = {
  buttons: ViewStyle;
  text: TextStyle;
};

const styles = StyleSheet.create<Style>({
  buttons: {
    height: hp(7.5),
    borderRadius: 4,
    marginTop: hp(2),
    marginBottom: hp(1),
    color: colors.white,
    borderColor: colors.orange,
    borderWidth: wp(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textTransform: 'capitalize',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    fontFamily: fonts.RalewayMedium,
  },
});

export default styles;
