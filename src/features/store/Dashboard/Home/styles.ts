import {StyleSheet, ViewStyle, Dimensions, TextStyle} from 'react-native';
import colors from '../../../../utils/colors/index';

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
    top: height * 0.1,
  },
  recentOrder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: height * 0.15,
    paddingBottom: 5,
  },
  recentContainer: {
    padding: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
