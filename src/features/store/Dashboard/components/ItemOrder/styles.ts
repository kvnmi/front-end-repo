import {StyleSheet, TextStyle, Dimensions, ViewStyle} from 'react-native';
import colors from '../../../../../utils/colors';
import fonts from '../../../../../utils/fonts';

type Style = {
  container: ViewStyle;
  bigTitle: TextStyle;
};

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create<Style>({
  bigTitle: {
    lineHeight: 24,
    fontFamily: fonts.PoppinsRegular,
    fontStyle: 'normal',
    paddingTop: height * 0.01,
    color: colors.customDark,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    height: height * 0.12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: colors.orange,
    width: width * 0.4,
    borderRadius: 25,
  },
});

export default styles;
