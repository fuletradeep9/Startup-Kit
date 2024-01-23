import { StyleSheet, View } from "react-native";
import React from "react";
import R from "@app/res/R";
import Text from "@app/components/common/Text";
import TextInput from "@app/components/common/TextInput";
import { validateEmail } from "@app/util/Validation";
import { useForgotPasswordModel } from "./ForgotPasswordModel";
import Button from "@app/components/common/Button";

const ForgotPasswordView = ({}) => {
  const {
    formData,
    setFormData,
    errorMsg,
    setErrorMsg,
    onForgotPasswordSubmitPress,
  } = useForgotPasswordModel();
  return (
    <View style={{ flex: 1 }}>
      <Text
        numberOfLines={1}
        color={R.color.black1}
        variant="h3"
        style={{ width: R.unit.scale(400) }}
        font={"bold"}
      >
        {R.strings.comman.forgot_password}
      </Text>
      <TextInput
        placeholder={R.strings.auth.enter_email}
        onChangeText={(text) => {
          setFormData({
            ...formData,
            email: text,
          });
          if (validateEmail(text)) {
            setErrorMsg({
              ...errorMsg,
              email: false,
            });
          } else {
            setErrorMsg({
              ...errorMsg,
              email: true,
            });
          }
        }}
        isError={errorMsg?.email}
        errorMsg={R.strings.validation.email}
        value={formData.email}
      />

      <Button
        btnText={R.strings.comman.submit}
        btnPress={onForgotPasswordSubmitPress}
        btnIsLoading={false}
        btnStyle={styles.submitButtonStyle}
      />
    </View>
  );
};

export default ForgotPasswordView;

const styles = StyleSheet.create({
  submitButtonStyle: {
    position: "absolute",
    bottom: R.unit.verticalScale(32),
    width: "100%",
  },
});
