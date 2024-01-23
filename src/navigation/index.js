import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { isReadyRef, navigationRef } from "./NavigationServices";
import { useColorScheme } from "react-native";

export default function RootNavigator({ theme }) {
  const scheme = useColorScheme();

  console.log('scheme',scheme)
  // const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => (isReadyRef.current = true)}
      theme={scheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {/* {!auth?.isAuthenticated ?
        (
          < AuthStack />
        )
        :
        (
          <AppStack />
        )
      } */}
      <AuthStack />
    </NavigationContainer>
  );
}
