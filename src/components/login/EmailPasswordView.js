import { View, Text } from "react-native";
import React from "react";
import { VStack } from "native-base";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import R from "@app/res/R";
import { validateEmail, validatePassword } from "@app/util/Validation";
import { useLoginModel } from "@app/screens/login/LoginModel";

const EmailPasswordView = () => {
  const {
    formData,
    setFormData,
    showPassword,
    setShowPassword,
    errorMsg,
    setErrorMsg,
  } = useLoginModel();
  return (
    <VStack>
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
      <PasswordInput
        placeholder={R.strings.auth.enter_password}
        onChangeText={(text) => {
          setFormData({
            ...formData,
            password: text,
          });
          if (validatePassword(text)) {
            setErrorMsg({
              ...errorMsg,
              password: false,
            });
          } else {
            setErrorMsg({
              ...errorMsg,
              password: true,
            });
          }
        }}
        isError={errorMsg?.password}
        errorMsg={R.strings.validation.password}
        value={formData.password}
        show={showPassword}
        setShow={() => {
          setShowPassword(!showPassword);
        }}
      />
    </VStack>
  );
};

export default EmailPasswordView;
