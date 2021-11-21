import {StyleSheet, ViewStyle, Dimensions, TextStyle} from 'react-native';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
const {width, height} = Dimensions.get('screen');

type Style = {
  container: ViewStyle;
  recentOrder: TextStyle;
  box: ViewStyle;
  recentContainer: ViewStyle;
  input: ViewStyle;
  stateText: TextStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.dashBoardColor,
    marginTop: height * 0.15,
    paddingTop: 10,
  },
  box: {
    marginLeft: width * 0.05,
  },
  recentOrder: {
    display: 'flex',
    marginLeft: width * 0.05,
    marginTop: height * 0.02,
  },
  recentContainer: {
    padding: 2,
  },
  input: {
    width: 330,
    height: 40,
    color: colors.black,
    borderColor: 'black',
    fontFamily: fonts.RalewayMedium,
    backgroundColor: colors.white,
  },
  stateText: {
    left: -149,
    paddingBottom: 10,
  },
});

export default styles;
