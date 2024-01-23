import React from "react";

import R from "@app/res/R";
import { ImageBackground, StatusBar, Text, Image } from "react-native";
import { View } from "native-base";
const Splash = () => {
  return (
    <ImageBackground source={R.image.splash_bg()} style={R.style.container}>
      <StatusBar
        translucent
        animated
        StatusBarAnimation="fade"
        backgroundColor="rgba(0,0,0,0.3)"
        barStyle="light-content"
        hidden
      />

      <View flex={1} justifyContent={"center"} alignItems={"center"}>
        <Image
          source={R.image.splash_logo()}
          style={{
            width: R.unit.scale(300),
            height: R.unit.scale(300),
            resizeMode: "contain",
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Splash;
