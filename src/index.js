import React, { useEffect, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import RootAppConnect from "./RootApp";
import NetInfo from "@react-native-community/netinfo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider, Spinner } from "native-base";
import { PersistGate } from "redux-persist/integration/react";
import InternetModal from "./components/common/InternetModal";
import { persistor, store } from "./store";
import ToastComponent from "./components/common/ToastComponent";

function RootApp() {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Is connected?", state.isConnected);
      if (state.isConnected == true) {
          setModalVisible(false);
          console.log('connection-Online');
      } else {
          setModalVisible(true);
          console.log('connection-OFFline');
      }
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <NativeBaseProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={<Spinner size="lg" />} persistor={persistor}>
          <SafeAreaProvider>
            <RootAppConnect />
            <InternetModal
              isVisible={isModalVisible}
              onConfirmation={() => {
                setModalVisible(!isModalVisible);
              }}
            />
          </SafeAreaProvider>
        </PersistGate>
      </ReduxProvider>
    </NativeBaseProvider>
  );
}

export default RootApp;
