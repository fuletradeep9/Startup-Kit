import { StyleSheet, View } from "react-native";
import React from "react";
import R from "@app/res/R";
import Text from "@app/components/common/Text";
import TextInput from "@app/components/common/TextInput";
import { validateEmail } from "@app/util/Validation";
import {  VStack } from "native-base";
import { useForgotPasswordModel } from "./ForgotPasswordModel";
import BaseLayout from "@app/components/layout";
import Button from "@app/components/common/Button";

const OTPVerificationView = ({}) => {
  const {
    formData,
    setFormData,
    errorMsg,
    setErrorMsg,
    onOTPSubmitPress,
    onHeaderBtnPress,
  } = useForgotPasswordModel();
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
      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={2}
          color={R.color.black1}
          variant="h3"
          style={{ width: R.unit.scale(350) }}
          font={"bold"}
          letterSpacing={0}
        >
          {R.strings.auth.otp_send}
        </Text>

        <Text
          numberOfLines={2}
          color={R.color.gray6}
          variant="title2"
          style={{ width: R.unit.scale(240) }}
          font={"medium"}
          letterSpacing={0.3}
        >
          {R.strings.auth.otp_des}
        </Text>
        <VStack mt={R.unit.verticalScale(24)}>
          <TextInput
            placeholder={R.strings.comman.otp}
            onChangeText={(text) => {
              setFormData({
                ...formData,
                email: text,
              });
            }}
            isError={false}
            value={formData.email}
            noLeftIcon
            keyboardType="numeric"
            helperText={R.strings.auth.otp_helper}
            maxLength={6}
          />
        </VStack>

        <Button
          btnText={R.strings.comman.submit}
          btnPress={onOTPSubmitPress}
          btnStyle={styles.submitButtonStyle}
          btnIsLoading={false}
        />
      </View>
    </BaseLayout>
  );
};

export default OTPVerificationView;

const styles = StyleSheet.create({
  submitButtonStyle: {
    position: "absolute",
    bottom: R.unit.verticalScale(32),
    width: "100%",
  },
});
