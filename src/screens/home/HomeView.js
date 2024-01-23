import { View, Image, StyleSheet } from "react-native";
import React from "react";
import R from "@app/res/R";

const HomeView = () => {
  return (
    <View
      style={styles.mainContainerStyle}
    >
      <Image
        source={R.image.splash_logo()}
        style={styles.imgStyle}
      />
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  mainContainerStyle:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle:{
    width: R.unit.scale(250),
    height: R.unit.scale(250),
    borderRadius: R.unit.scale(15),
    resizeMode: "contain",
  }
})
