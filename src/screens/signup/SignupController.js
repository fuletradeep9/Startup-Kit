import { View, Text } from "react-native";
import React, { useState } from "react";
import BaseLayout from "@app/components/layout";
import R from "@app/res/R";
import { useSignupModel } from "./SignupModel";
import SignupView from "./SignupView";
import SignupEmailView from "./SignUpEmailVIew";
import SignupPasswordView from "./SignupPasswordView";

const SignupController = (props) => {
  const {
    onHeaderBtnPress,
    showNameField,
    showEmailField,
    showPasswordField,
    onSignupEmailContinuePress,
    onSignupNameContinuePress,
  } = useSignupModel();

  return (
    <BaseLayout
      enableHeader={false}
      barStyle={"dark-content"}
      statusBarBg={R.color.primaryDark}
      enableTabView={false}
      disableScrollView={true}
      onHeaderBtnPress={onHeaderBtnPress}
      headerBtnText={R.strings.comman.Login}
      headerBtnIcon={"login"}
      headerBtnColor={R.color.black1}
    >
      {console.log("sssss", showNameField, showEmailField, showPasswordField)}
      {showNameField ? (
        <SignupView
          {...props}
          onSignupNameContinuePress={onSignupNameContinuePress}
        />
      ) : showEmailField ? (
        <SignupEmailView
          {...props}
          onSignupEmailContinuePress={onSignupEmailContinuePress}
        />
      ) : showPasswordField ? (
        <SignupPasswordView {...props} />
      ) : null}
    </BaseLayout>
  );
};

export default SignupController;
