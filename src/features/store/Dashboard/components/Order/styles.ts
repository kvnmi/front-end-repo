import {StyleSheet, TextStyle, Dimensions, ViewStyle} from 'react-native';
import colors from '../../../../../utils/colors';
import fonts from '../../../../../utils/fonts';

type Style = {
  container: ViewStyle;
  smallTitle: TextStyle;
  bigTitle: TextStyle;
  rowCount: ViewStyle;
  count: TextStyle;
  rowContainer: ViewStyle;
};

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create<Style>({
  smallTitle: {
    lineHeight: 21.13,
    fontFamily: fonts.PoppinsRegular,
    fontSize: 18,
    color: colors.orange,
    fontWeight: '500',
    display: 'flex',
    paddingTop: height * 0.01,
    paddingLeft: width * 0.05,
    position: 'relative',
  },
  bigTitle: {
    lineHeight: 24,
    fontFamily: fonts.PoppinsRegular,
    fontStyle: 'normal',
    paddingTop: height * 0.03,
    color: colors.customDark,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
  },
  count: {
    lineHeight: 30,
    fontFamily: fonts.PoppinsRegular,
    fontStyle: 'normal',
    paddingTop: height * 0.03,
    color: colors.customDark,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    height: height * 0.2,
    backgroundColor: colors.skyBlue,
    width: width * 0.9,
    borderRadius: 25,
    position: 'absolute',
    elevation: 2,
    top: -(height * 0.2),
  },
  rowCount: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: height * 0.02,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
