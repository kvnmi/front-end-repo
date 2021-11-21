import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import colors from '../../../utils/colors';
import { RFPercentage as hp,  RFValue as wp } from "react-native-responsive-fontsize";


type Style = {
    topYellowContainer:ViewStyle,
    container:ViewStyle,
    title:TextStyle,
    subTitle:TextStyle,
    formSection:ViewStyle,
    button:ViewStyle,
    goRegister:ViewStyle,
    alreadyHasAccount:TextStyle,
    loginLink:TextStyle,
    backArrow:ViewStyle,
    error:TextStyle;
    newPassword:ViewStyle;
    newPasswordText:TextStyle;
  };
  
const styles = StyleSheet.create<Style>({
  topYellowContainer:{
    display:'flex',
    flex:1,
    backgroundColor:"rgba(219, 165, 20, 0.82)"
  },
  newPassword:{
    marginLeft:wp(10),
    marginTop:hp(3)
  },
  newPasswordText:{
   color:colors.error,
   textAlign:"center"
  },
  
  backArrow:{
    height:hp(10),
    top:hp(2)
  },
  container: {
    display:"flex",
    position:"absolute",
    width:"100%",
    top:hp(50),
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    height:hp(60),
    backgroundColor:colors.white,
    elevation:5
  },
  title:{
    fontWeight:"600",
    fontStyle:"normal",
    fontSize:20,
    lineHeight:34,
    marginTop:hp(5),
    marginLeft:wp(20)
  },
  subTitle:{
    fontWeight:"400",
    fontStyle:"normal",
    fontSize:14,
    lineHeight:22,
    marginTop:hp(2),
    marginLeft:wp(20)
  },
  button:{
    marginTop:hp(3),
    marginLeft:wp(20)
  },
  formSection:{
    marginTop:hp(7),
    marginLeft:wp(20),
  },
  goRegister:{
    display:"flex",
    flexDirection:"row",
    marginLeft:wp(60) 
  },
  alreadyHasAccount:{
    textAlign:"center",
   },
   loginLink:{
       color:colors.orange,
   },
   error:{
    fontWeight:"400",
    fontStyle:"normal",
    fontSize:14,
    lineHeight:22,
    marginTop:hp(2),
    marginLeft:wp(20),
    color:colors.error
  },
   
});

export default styles;