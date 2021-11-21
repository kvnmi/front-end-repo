import React, {useEffect} from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
const logoSrc = require('../../../assets/images/PanthaLogo.png');
import navigationService from '../../../navigation/NavigationService';
import {useDispatch} from 'react-redux';
import * as themeAction from '../../../store/actions/themeActions';

const SplashScreen: React.FC = () => {
  const dispatch = useDispatch();
  const whiteTheme = () => dispatch(themeAction.setIsDarkTheme(true));

  useEffect(() => {
    whiteTheme();
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      navigationService.navigate('Onboarding');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView>
      {/* <StatusBar hidden /> */}
      <View style={styles.container}>
        <Image source={logoSrc} style={styles.image} />
        <Text style={styles.textColors}>Rain</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
