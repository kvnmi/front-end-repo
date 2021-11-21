import {
  StyleSheet,
  ViewStyle,
  Dimensions,
  TextStyle,
  ImageStyle,
} from 'react-native';
import colors from '../../../../utils/colors/index';
import fonts from '../../../../utils/fonts';

const {width, height} = Dimensions.get('screen');

type Style = {
  container: ViewStyle;
  images: ImageStyle;
  emptyMessage: TextStyle;
  buttons: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.dashBoardColor,
    marginTop: 100,
  },
  emptyMessage: {
    fontFamily: fonts.RalewayMedium,
    fontSize: 25,
    lineHeight: 28.18,
    letterSpacing: -0.3,
    fontStyle: 'normal',
    color: colors.orange,
    top: height * 0.35,
  },
  images: {
    height: height * 0.32,
    width: width * 0.8,
    resizeMode: 'contain',
    position: 'absolute',
  },
  buttons: {
    marginTop: height * 0.45,
  },
});

export default styles;
