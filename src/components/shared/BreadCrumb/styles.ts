import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import colors from '../../../utils/colors';
import {
  RFPercentage as hp,
  RFValue as wp,
} from 'react-native-responsive-fontsize';
import fonts from '../../../utils/fonts';

type Style = {
  container: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
  bigTitle: TextStyle;
  rowContainer: ViewStyle;
  left: ViewStyle;
  icons: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    top: -2,
    width: wp(365),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: hp(1),
    backgroundColor: colors.customDark,
    borderWidth: wp(1),
    position: 'absolute',
  },
  bigTitle: {
    top: hp(6),
    left: wp(18),
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 34,
    color: colors.white,
    paddingBottom: hp(1),
    marginTop: hp(5),
    fontFamily: fonts.RalewayMedium,
  },
  title: {
    top: hp(6),
    left: wp(18),
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 34,
    color: colors.white,
    fontFamily: fonts.RalewayMedium,
  },
  subTitle: {
    top: hp(6),
    left: wp(18),
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: colors.breadCrumbSubtitle,
    fontFamily: fonts.RalewayMedium,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    flex: 5,
  },
  icons: {
    flex: 2,
  },
});

export default styles;
