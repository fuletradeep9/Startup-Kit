import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import R from "@app/res/R";

const SocialLogin = (props) => {
    const {
        imgURL = '',
        btnPress,
        ...restProps
      } = props;
  return (
    <TouchableOpacity
    onPress={btnPress}
      style={{
        borderColor: R.color.gray3Light,
        borderRadius: R.unit.scale(8),
        borderWidth: 1,
        paddingVertical: R.unit.scale(12),
        paddingHorizontal: R.unit.scale(32),
      }}
    >
      <Image
        source={imgURL}
        style={{
          width: R.unit.scale(30),
          height: R.unit.scale(30),
          resizeMode: "contain",
        }}
      />
    </TouchableOpacity>
  );
};

export default SocialLogin;
