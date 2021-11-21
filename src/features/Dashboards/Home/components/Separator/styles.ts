import {Dimensions, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../../../utils/colors';
import fonts from '../../../../../utils/fonts';

type Style = {
  container: ViewStyle;
  text: TextStyle;
};
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: colors.dateSeparatorColor,
    height: height * 0.03,
    width: width * 0.93,
    display: 'flex',
    padding: 6,
    margin: width * 0.01,
  },
  text: {
    marginLeft: width * 0.03,
    lineHeight: 15,
    fontFamily: fonts.RalewayMedium,
    color: colors.customDark,
    fontWeight: 'normal',
  },
});

export default styles;
