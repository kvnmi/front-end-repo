import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import { RFPercentage as hp,  RFValue as wp } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:"relative"
  },

  content:{
    width:"100%",
    position:"absolute"
  },
  
  login: {
    padding: 8,
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
});

export default styles;