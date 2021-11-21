import {StyleSheet, ViewStyle, Dimensions, TextStyle} from 'react-native';
import colors from '../../../utils/colors';
const {width, height} = Dimensions.get('screen');

type Style = {
  container: ViewStyle;
  recentOrder: TextStyle;
  box: ViewStyle;
  recentContainer: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.dashBoardColor,
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
});

export default styles;
