import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/components/AuthStack';
import AppStack from './src/components/AppStack';
import { ThemeContextProvider } from './src/core/themeProvider';
import * as Font from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {

        await Font.loadAsync({
          'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
          'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
          'Raleway-Italic': require('./assets/fonts/Raleway-Italic.ttf'),
          'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeContextProvider>
        <NavigationContainer>
          <Stack.Navigator 
          	initialRouteName="AuthStack" 
          	screenOptions={{
          		headerShown: false
          	}}
          >
          	<Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="AppStack" component={AppStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContextProvider>
    );
  }
}