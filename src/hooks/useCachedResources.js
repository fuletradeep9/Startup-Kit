import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'Khula-Regular': require('../../assets/fonts/Khula-Regular.ttf'),
          'Khula-Bold': require('../../assets/fonts/Khula-Bold.ttf'),
          'Khula-Light': require('../../assets/fonts/Khula-Light.ttf'),
          'Khula-SemiBold': require('../../assets/fonts/Khula-SemiBold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        setTimeout(async () => {
          await SplashScreen.hideAsync();
        }, 2000);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
