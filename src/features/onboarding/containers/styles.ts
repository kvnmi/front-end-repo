import {
  StyleSheet,
  Platform,
  ViewStyle,
  TextStyle,
  ImageStyle,
  StatusBar,
} from 'react-native';
import {
  RFPercentage as hp,
  RFValue as wp,
} from 'react-native-responsive-fontsize';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

type Style = {
  pageContainer: ViewStyle;
  statusBar: ViewStyle;
  icon: ImageStyle;
  heroSection: ViewStyle;
  onboardingImage: ImageStyle;
  appButton: ViewStyle;
  distributor: ViewStyle;
  distributorText: TextStyle;
  yesText: TextStyle;
};

const styles = StyleSheet.create<Style>({
  appButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(20),
    top: hp(10),
  },
  pageContainer: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
  statusBar: {
    // @ts-ignore: Unreachable code error
    paddingTop: Platform.OS != 'android' ? 0 : StatusBar.currentHeight,
  },
  heroSection: {
    height: hp(45),
    top: hp(10),
    width: wp(350),
    left: wp(6),
    padding: hp(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardingImage: {
    width: '80%',
    height: hp(100),
    resizeMode: 'contain',
  },
  distributor: {
    top: hp(12),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  distributorText: {
    lineHeight: wp(15),
    fontSize: wp(15),
    fontWeight: 'normal',
    fontStyle: 'normal',
    padding: wp(1),
    margin: wp(1),
  },
  yesText: {
    lineHeight: wp(15),
    fontSize: wp(15),
    fontWeight: 'normal',
    fontStyle: 'normal',
    padding: wp(1),
    margin: wp(1),
    fontFamily: fonts.RalewayMedium,
    color: colors.orange,
  },
  icon: {},
});

export default styles;
