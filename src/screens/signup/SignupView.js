import { View, Image, TouchableOpacity, StyleSheet, Platform } from "react-native";
import React from "react";
import {
  HStack,
  VStack,
} from "native-base";
import Text from "@app/components/common/Text";
import R from "@app/res/R";
import TextInput from "@app/components/common/TextInput";
import PasswordInput from "@app/components/common/PasswordInput";
import {
  validateName,
} from "@app/util/Validation";
import { useSignupModel } from "./SignupModel";
import Button from "@app/components/common/Button";
import SeparatorView from "@app/components/login/SeparatorView";
import SocialLogin from "@app/components/common/SocialLogin";
import { appleLogin, facebookLogin, googleLogin } from "@app/util/CommonFunctions";

const SignupView = ({ onSignupNameContinuePress }) => {
  const {
    formData,
    setFormData,
    errorMsg,
    setErrorMsg,
    onSigninTextPress,
  } = useSignupModel();
  return (
    <View style={{ flex: 1 }}>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <VStack flex={1}>
          <Text
            numberOfLines={1}
            color={R.color.black1}
            variant="h3"
            style={{ width: R.unit.scale(290) }}
            font={"bold"}
          >
            {R.strings.auth.create_account}
          </Text>
          <Text
            numberOfLines={2}
            color={R.color.black2}
            variant="title"
            style={{ width: R.unit.scale(400) }}
            font={"medium"}
          >
            {R.strings.auth.signup_con}
          </Text>
        </VStack>
        <VStack>
          <R.svg.logo width={R.unit.scale(80)} height={R.unit.scale(80)} />
        </VStack>
      </HStack>

      <VStack mt={R.unit.verticalScale(32)}>
        <Text
          numberOfLines={1}
          color={R.color.black2}
          variant="h0"
          style={{ width: R.unit.scale(300) }}
          font={"bold"}
        >
          {R.strings.auth.tell_name}
        </Text>
        <TextInput
          placeholder={R.strings.auth.first_name}
          onChangeText={(text) => {
            setFormData({
              ...formData,
              first_name: text,
            });
            if (validateName(text)) {
              setErrorMsg({
                ...errorMsg,
                first_name: false,
              });
            } else {
              setErrorMsg({
                ...errorMsg,
                first_name: true,
              });
            }
          }}
          isError={errorMsg?.first_name}
          errorMsg={R.strings.validation.name}
          value={formData?.first_name}
          noLeftIcon
        />
        <TextInput
          placeholder={R.strings.auth.last_name}
          onChangeText={(text) => {
            setFormData({
              ...formData,
              last_name: text,
            });
            if (validateName(text)) {
              setErrorMsg({
                ...errorMsg,
                last_name: false,
              });
            } else {
              setErrorMsg({
                ...errorMsg,
                last_name: true,
              });
            }
          }}
          isError={errorMsg?.last_name}
          errorMsg={R.strings.validation.name}
          value={formData?.last_name}
          noLeftIcon
        />
      </VStack>

      <Button
        btnText={R.strings.comman.continue}
        btnPress={onSignupNameContinuePress}
        btnIsLoading={false}
      />

      <SeparatorView />

      <HStack justifyContent={Platform.OS === "ios" ? "space-between" : 'space-evenly'}>
        {Platform.OS === "ios" ? (
          <SocialLogin imgURL={R.image.apple_logo()} btnPress={appleLogin} />
        ) : null}

        <SocialLogin
          imgURL={R.image.facebook_logo()}
          btnPress={facebookLogin}
        />
        <SocialLogin imgURL={R.image.google_logo()} btnPress={googleLogin} />
      </HStack>

      <HStack
        alignSelf={"center"}
        position={"absolute"}
        bottom={R.unit.verticalScale(32)}
        alignItems={"center"}
      >
        <Text variant="title2" font={"medium"} align="center">
          {R.strings.auth.already_account}
        </Text>
        <Text
          variant="title2"
          font={"medium"}
          align="center"
          color={R.color.info}
          fontWeight="600"
          transform={"uppercase"}
          onPress={onSigninTextPress}
        >
          {R.strings.comman.signin}
        </Text>
      </HStack>
    </View>
  );
};

export default SignupView;

const styles = StyleSheet.create({
  selectedTabStyle: {
    flex: 0.5,
    backgroundColor: R.color.white,
    paddingVertical: 10,
    shadowColor: R.color.gray5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.0,
    elevation: 3,
    borderRadius: R.unit.scale(5),
  },
  disableTabStyle: { flex: 0.5 },
});
