import React from 'react'
import { StyleSheet, Text, View , Animated, Image, Dimensions } from 'react-native'
import { RFPercentage as hp,  RFValue as wp } from "react-native-responsive-fontsize";
import colors from '../../../utils/colors';

const Loader : React.FC = () => {
    const ukdionLogo = require('../../../assets/images/PanthaLogo.png');
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.sequence([
          Animated.delay(500),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver:true
          }),
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver:true
          })
        ]).start(
          () => fadeIn()
        );
      };

    React.useEffect(() => {
      fadeIn(); 
    }, [fadeAnim])

    return (
        <View style={styles.container}>
                <Animated.View
                    style={[
                    styles.fadingContainer,
                    {
                        opacity: fadeAnim // Bind opacity to animated value
                    }
                    ]}
                    >
        <View>
            <Image source={ukdionLogo} style={styles.ukdionImages} />
        </View>
    </Animated.View>
    </View>
    )
}

export default Loader 

const {height,width} = Dimensions.get('screen'); 
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.black,
        height:height,
        width:width,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    fadingContainer: {
      backgroundColor: "transparent"
    },
    
    ukdionImages:{
      height:hp(50),
      width:wp(50),
      resizeMode:"contain"
    }
})
