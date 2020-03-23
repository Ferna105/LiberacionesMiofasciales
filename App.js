import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/components/AuthStack';
import AppStack from './src/components/AppStack';
import SplashScreen from './src/components/SplashScreen';
import { ThemeContextProvider } from './src/core/themeProvider';
import * as Font from 'expo-font';
import { AuthContext } from '@components/context';
import { AsyncStorage } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const [profile, setProfile] = React.useState(null);
  
  const authContext = React.useMemo(() => {
    return {
      signIn: (profile) => {
        setIsLoading(false);
        setProfile(profile);
        AsyncStorage.setItem('@profile', JSON.stringify(profile));
      },
      signOut: () => {
        setIsLoading(false);
        setProfile(null);
        AsyncStorage.setItem('@profile', '');
      },
      getProfile: () => {

        return profile;
      }
    }
  }, [])

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
          'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
          'Raleway-Italic': require('./assets/fonts/Raleway-Italic.ttf'),
          'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
        });

        storedProfile = await AsyncStorage.getItem('@profile');
        console.log(storedProfile);
        setProfile(JSON.parse(storedProfile));

      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoading(false);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  
  if (isLoading) {
    return (
      <ThemeContextProvider>
        <SplashScreen />
      </ThemeContextProvider>
    );
  } else {
    return (
      <ThemeContextProvider>
        <AuthContext.Provider value={authContext}>
          <NavigationContainer>
            <Stack.Navigator 
              initialRouteName="AuthStack" 
              screenOptions={{
                headerShown: false
              }}
            >
              {
                profile ? (
                  <Stack.Screen name="AppStack" component={AppStack} />
                ) : (
                  <Stack.Screen name="AuthStack" component={AuthStack} />
                ) 
              }
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      </ThemeContextProvider>
    );
  }
}