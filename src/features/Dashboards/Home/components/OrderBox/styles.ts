import {Dimensions, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../../../utils/colors';
import fonts from '../../../../../utils/fonts';

type Style = {
  container: ViewStyle;
  text: TextStyle;
  leftLogo: ViewStyle;
  rightContent: ViewStyle;
  logoPlaceholder: ViewStyle;
};
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create<Style>({
  container: {
    height: height * 0.12,
    width: width,
    display: 'flex',
    flexDirection: 'row',
    margin: width * 0.01,
  },
  text: {
    marginLeft: width * 0.03,
    lineHeight: 15,
    fontFamily: fonts.RalewayMedium,
    color: colors.customDark,
    fontWeight: 'normal',
  },
  leftLogo: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
  rightContent: {
    flex: 5,
    backgroundColor: 'yellow',
  },
  logoPlaceholder: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'green',
  },
});

export default styles;
