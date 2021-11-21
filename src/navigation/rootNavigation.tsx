import React from 'react';
import {navigationRef} from './NavigationService';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import App from './NavigationStack';

interface IProps {
  theme: Theme;
}

const rootNavigation: React.FC<IProps> = ({theme}) => {
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <App />
    </NavigationContainer>
  );
};

export default rootNavigation;
