import React, {useEffect} from 'react';
import {View, SafeAreaView, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import * as themeAction from '../../../store/actions/themeActions';
import styles from './styles';
import BackArrow from '../../../components/shared/BackArrow';
import AppButton from '../../../components/shared/Button';
import colors from '../../../utils/colors';
import NavigationService from '../../../navigation/NavigationService';
const onboardingImage = require('../../../assets/images/Onboarding.png');

const OnboardingScreen: React.FC = () => {
  const dispatch = useDispatch();
  const whiteTheme = () => dispatch(themeAction.setIsDarkTheme(false));

  useEffect(() => {
    whiteTheme();
  });

  const navigateWith = () => {
    NavigationService.navigate('Register', {is_distributor: true});
  };

  return (
    <SafeAreaView style={styles.pageContainer}>
      <View>
        <BackArrow />
      </View>
      <View style={styles.heroSection}>
        <Image source={onboardingImage} style={styles.onboardingImage} />
      </View>
      <View style={styles.distributor}>
        <Text style={styles.distributorText}>
          Sign in / up as a Distributor?
        </Text>
      </View>
      <View style={styles.appButton}>
        <AppButton
          textcolor={colors.white}
          bgcolor={colors.orange}
          text={' Sign in'}
          navigationTo={'Login'}
        />
        <AppButton
          textcolor={colors.orange}
          bgcolor={colors.white}
          text={'Register'}
          method={navigateWith}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
