import {StyleSheet, TextStyle} from 'react-native';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

type Style = {
  text: TextStyle;
};

const styles = StyleSheet.create<Style>({
  text: {
    lineHeight: 15,
    fontFamily: fonts.RalewayMedium,
    color: colors.customDark,
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center',
  },
});

export default styles;
