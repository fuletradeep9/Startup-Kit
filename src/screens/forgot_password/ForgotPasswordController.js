import { View, Text } from "react-native";
import React, { useState } from "react";
import BaseLayout from "@app/components/layout";
import R from "@app/res/R";
import ForgotPasswordView from "./ForgotPasswordView";
import { useForgotPasswordModel } from "./ForgotPasswordModel";

const ForgotPasswordController = (props) => {
  const { onHeaderBtnPress } = useForgotPasswordModel();

  return (
    <BaseLayout
      enableHeader={true}
      barStyle={"dark-content"}
      statusBarBg={R.color.primaryDark}
      enableTabView={false}
      disableScrollView={true}
      onHeaderBtnPress={onHeaderBtnPress}
      headerBtnText={R.strings.comman.Login}
      headerBtnIcon={"login"}
      headerBtnColor={R.color.black1}
    >
      <ForgotPasswordView {...props} />
    </BaseLayout>
  );
};

export default ForgotPasswordController;
