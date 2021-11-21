import { StyleSheet,ViewStyle, TextStyle } from 'react-native';
import colors from '../../../utils/colors';

type Style = {
horinzontalLine: ViewStyle;
};

const styles = StyleSheet.create<Style>({
    horinzontalLine:{
        marginTop:25,
        marginLeft:10,
        height:1,
        width:"100%",
        backgroundColor:"#D3D3D3"
    }
});

export default styles;