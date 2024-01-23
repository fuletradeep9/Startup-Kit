import { View, Text } from "react-native";
import React, { useState } from "react";
import BaseLayout from "@app/components/layout";
import LoginView from "./LoginView";
import R from "@app/res/R";
import { useLoginModel } from "./LoginModel";

const LoginController = (props) => {
  const { onHeaderBtnPress } = useLoginModel();

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
      <LoginView {...props} />
    </BaseLayout>
  );
};

export default LoginController;
