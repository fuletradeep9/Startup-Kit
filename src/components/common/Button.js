import { View, Text } from "react-native";
import React from "react";
import { Button as Btn } from "native-base";
import R from "@app/res/R";

const Button = (props) => {
    const {
        btnText = 'Submit',
        btnIsLoading = false,
        btnPress,
        btnStyle,
        ...restProps
      } = props;
  return (
    <Btn
      size="lg"
      mt={R.unit.verticalScale(24)}
      variant="subtle"
      colorScheme={"lightBlue"}
      _text={{
        color: R.color.info,
      }}
      isLoading={btnIsLoading}
      _spinner={{
        color: R.color.info,
      }}
      onPress={btnPress}
      style={btnStyle}
    >
      {btnText}
    </Btn>
  );
};

export default Button;
