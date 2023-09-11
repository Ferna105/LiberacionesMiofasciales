import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/components/AuthStack';
import AppStack from './src/components/AppStack';
import SplashScreen from './src/components/SplashScreen';
import { ThemeContextProvider } from './src/core/themeProvider';
import * as Font from 'expo-font';
import { AuthContext } from '@components/context';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getExercises,getChains} from '@theme/queries';
import { Asset } from 'expo-asset';
import { Ionicons,MaterialCommunityIcons,AntDesign,FontAwesome } from '@expo/vector-icons';

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
        AsyncStorage.getItem('@profile').then(profile => {
          return JSON.parse(profile);
        });
      }
    }
  }, [])

  function cacheChains() {
    var chains = getChains();
    return chains.map(chain => {
      return Asset.fromModule(chain.image).downloadAsync();
    });
  }

  function cacheExercises() {
    var exercises = getExercises();
    return exercises.map(exercise => {
      return Asset.fromModule(exercise.gif).downloadAsync();
    });

  }

  function cacheAssets() {
    var sliders = [
      require('@assets/slider/slider0.png'),
      require('@assets/slider/slider1.png'),
      require('@assets/slider/slider2.png'),
      require('@assets/slider/slider3.png'),
      require('@assets/slider/slider4.png'),
      require('@assets/slider/slider5.png'),
      require('@assets/slider/slider6.png'),
      require('@assets/slider/slider7.png'),
      require('@assets/slider/slider8.png'),
      require('@assets/slider/slider9.png'),
      require('@assets/slider/slider10.png'),
      require('@assets/slider/slider11.png'),
      require('@assets/slider/slider12.png'),
      require('@assets/slider/slider13.png'),
      require('@assets/slider/slider14.png'),
      require('@assets/slider/slider15.png')
    ];

    return sliders.map(slider => {
      return Asset.fromModule(slider).downloadAsync();
    });

  }

  const cacheFonts = (fonts) => {
    return fonts.map(font => Font.loadAsync(font));
  }

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {

        const fontAssets = cacheFonts([
          Ionicons.font,
          MaterialCommunityIcons.font,
          AntDesign.font,
          FontAwesome.font,
          {
            'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
            'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
            'Raleway-Italic': require('./assets/fonts/Raleway-Italic.ttf'),
            'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
          }
        ]);
        
        await Promise.all([...fontAssets]);

        cacheExercises();

        storedProfile = await AsyncStorage.getItem('@profile');
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