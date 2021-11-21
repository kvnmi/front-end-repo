
import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 39,
    width: 30,
    resizeMode: 'contain',
    position:"absolute",
    top:height * 0.40,
    left:width * 0.46
    
  },
  textColors:{
    color:"#FFFFFF",
    fontSize:40,
    fontWeight:"bold",
    lineHeight:47,
    letterSpacing:0.1,
    position:"absolute",
    top:height * 0.47,
    width:96,
    height:47,
    left:width * 0.4,

  },
  buttons:{
    position:"absolute",
    left:27,
    top:644
  }
});

export default styles;