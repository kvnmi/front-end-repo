import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import ThemeController from '../components/ThemeController';
import {ILoginReducer} from '../features/auth/login/actions/login.interface';
import {AuthData, dashboardData} from './navData';

interface ILoginReducerState {
  loginReducer: ILoginReducer;
}

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const homeOptions: StackNavigationOptions = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,
};

const AuthNavigator = () => (
  <AuthStack.Navigator initialRouteName="Onboarding">
    {AuthData &&
      AuthData.map((item, idx) => (
        <Stack.Screen
          name={item.name}
          key={`navData${idx + 1}`}
          component={item.component}
          options={{headerShown: false}}
        />
      ))}
  </AuthStack.Navigator>
);
const LoggedInNavigator = () => (
  <LoggedInStack.Navigator initialRouteName="createStore">
    {dashboardData &&
      dashboardData.map((item, idx) => (
        <Stack.Screen
          name={item.name}
          key={`navData${idx + 1}`}
          component={item.component}
          options={{headerShown: false}}
        />
      ))}
  </LoggedInStack.Navigator>
);

const App: React.FC = () => {
  const isLoggedIn = useSelector(
    (state: ILoginReducerState) => state.loginReducer.isLoggedIn,
  );
  return (
    <Stack.Navigator initialRouteName="Auth" headerMode="none">
      {!isLoggedIn ? (
        <Stack.Screen
          name="App"
          component={LoggedInNavigator}
          options={homeOptions}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{
            animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            headerRight: () => <ThemeController />,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default App;
