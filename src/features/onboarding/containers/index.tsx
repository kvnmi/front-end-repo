import React, {useEffect} from 'react';
import {View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import * as themeAction from '../../../store/actions/themeActions';
import styles from './styles';
import BackArrow from '../../../components/shared/BackArrow';
import AppButton from '../../../components/shared/Button';
import colors from '../../../utils/colors';
import AppText from '../../../components/shared/AppText';
import NavigationService from '../../../navigation/NavigationService';
const onboardingImage = require('../../../assets/images/Onboarding.png');

const OnboardingScreen: React.FC = () => {
  const dispatch = useDispatch();
  const whiteTheme = () => dispatch(themeAction.setIsDarkTheme(false));

  useEffect(() => {
    whiteTheme();
  });

  const navigateWith = () => {
    NavigationService.navigate('Register', {is_distributor: false});
  };

  return (
    <SafeAreaView style={styles.pageContainer}>
      <View>
        <BackArrow />
      </View>
      <View style={styles.heroSection}>
        <Image source={onboardingImage} style={styles.onboardingImage} />
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
      <TouchableOpacity
        style={styles.distributor}
        onPress={() => NavigationService.navigate('DistributorOnboarding')}>
        <AppText>Are you a distributor?</AppText>
        <AppText style={styles.yesText}>Yes</AppText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
