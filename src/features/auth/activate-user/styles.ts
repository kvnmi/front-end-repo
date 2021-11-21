import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native';

import colors from '../../../utils/colors';
import { RFPercentage as hp,  RFValue as wp } from "react-native-responsive-fontsize";


type Style = {
    content:ViewStyle,
    button:ViewStyle,
    titleContainer:ViewStyle,
    titleText:TextStyle,
    subTitleContainer:ViewStyle,
    subtitleText:TextStyle,
    inviteCodeContainer:ViewStyle,
    inviteText:TextStyle,
    otpContainer:ViewStyle
    
  };

  const {width, height} = Dimensions.get("screen");
  
const styles = StyleSheet.create<Style>({
  content:{
    backgroundColor:colors.skyBlue,
    top:hp(24),
    height:hp(100),
    display:"flex",
    alignItems:"center",
    width:"100%",
    paddingTop:hp(50),
    
    
  },
  button:{
    marginTop:hp(8),
    elevation: 0
  },
  titleContainer:{
    position:"absolute",
    left:width*0.071,
    top:height*0.05,

  },
  titleText:{
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 34,
  },
  subTitleContainer:{
    position:"absolute",
    left:width*0.071,
    top:height*0.09,
  },
  subtitleText:{
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 34,
  },
  inviteCodeContainer:{
    position:"absolute",
    left:width*0.071,
    top:height*0.14,  
  },
  inviteText:{
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 34,
  },
  otpContainer:{
    position:"absolute",
    left:width*0.071,
    top:height*0.25,  
  }

});

export default styles;