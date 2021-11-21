import {StyleSheet, ViewStyle} from 'react-native';
import {
  RFPercentage as hp,
  RFValue as wp,
} from 'react-native-responsive-fontsize';
import colors from '../../../utils/colors';
type Style = {
  image: ViewStyle;
  container: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    top: hp(3),
    left: wp(15),
  },
  image: {
    height: hp(2.5),
    width: wp(12),
    tintColor: colors.white,
  },
});

export default styles;
