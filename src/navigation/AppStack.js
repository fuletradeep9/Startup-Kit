import { AppStackC } from '@app/constants/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@app/screens/home/HomeController';
import AppStackScreen from '@app/screens/misc/AppStackScreen';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const AppStack = () => {

  return <Stack.Navigator initialRouteName={AppStackC.HOME_SCREEN}>
    <Stack.Screen
      name={AppStackC.APP_STACK_SCREEN}
      component={AppStackScreen}
      options={() => ({
        title: AppStackC.APP_STACK_SCREEN,
        headerShown: false,
      })}
    />
    <Stack.Screen
      name={AppStackC.HOME_SCREEN}
      component={HomeScreen}
      options={() => ({
        title: AppStackC.HOME_SCREEN,
        headerShown: false,
      })}
    />
  </Stack.Navigator>
}

export default AppStack;
