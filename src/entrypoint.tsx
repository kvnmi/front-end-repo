 import React from 'react';
 import { ActivityIndicator } from 'react-native';
 import { Provider, useSelector } from 'react-redux';
 import { PersistGate } from 'redux-persist/es/integration/react';
 import { Provider as PaperProvider } from 'react-native-paper';
 
 import {
   PaperThemeDefault,
   PaperThemeDark,
   CombinedDefaultTheme,
   CombinedDarkTheme,
 } from './config/theme-config';

 import Navigator from './navigation';
 import configureStore from './store';
 import { IThemeState } from './models/reducer/theme';
 
 const { persistor, store } = configureStore();
 
 interface IState {
   themeReducer: IThemeState;
 }
 
 const RootNavigation: React.FC = () => {
   const isDark = useSelector((state: IState) => state.themeReducer.isDark);
   const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;
   const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;
 
   return (
     <PaperProvider theme={paperTheme}>
       <Navigator theme={combinedTheme} />
     </PaperProvider>
   );
 };
 
 const EntryPoint: React.FC = () => {
   return (
     <Provider store={store}>
       <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
         <RootNavigation />
       </PersistGate>
     </Provider>
   );
 };
 
 export default EntryPoint;