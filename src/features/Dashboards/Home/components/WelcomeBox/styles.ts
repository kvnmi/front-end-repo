import {StyleSheet, TextStyle, Dimensions, ViewStyle} from 'react-native';
import colors from '../../../../../utils/colors';
import fonts from '../../../../../utils/fonts';

type Style = {
  container: ViewStyle;
  smallTitle: TextStyle;
  bigTitle: TextStyle;
};

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create<Style>({
  smallTitle: {
    lineHeight: 18,
    fontFamily: fonts.PoppinsRegular,
    fontSize: 12,
    color: colors.white,
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center',
    paddingTop: height * 0.01,
    paddingLeft: width * 0.05,
  },
  bigTitle: {
    lineHeight: 24,
    fontFamily: fonts.PoppinsRegular,
    fontStyle: 'normal',
    paddingTop: height * 0.03,
    paddingLeft: width * 0.05,
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    height: height * 0.14,
    backgroundColor: colors.black,
    width: width * 0.9,
    borderRadius: 25,
  },
});

export default styles;
