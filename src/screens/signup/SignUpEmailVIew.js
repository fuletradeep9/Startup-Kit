import { View, Image, TouchableOpacity, StyleSheet, Platform } from "react-native";
import React from "react";
import { Checkbox, HStack, VStack } from "native-base";
import Text from "@app/components/common/Text";
import R from "@app/res/R";
import TextInput from "@app/components/common/TextInput";
import { validateEmail } from "@app/util/Validation";
import { useSignupModel } from "./SignupModel";
import Button from "@app/components/common/Button";
import SeparatorView from "@app/components/login/SeparatorView";
import SocialLogin from "@app/components/common/SocialLogin";
import { appleLogin, facebookLogin, googleLogin } from "@app/util/CommonFunctions";

const SignupEmailView = ({ onSignupEmailContinuePress }) => {
  const {
    formData,
    setFormData,
    errorMsg,
    setErrorMsg,
    isAgree,
    onIsAgreePress,
    onSigninTextPress
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
            // fontWeight="700"
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
          {R.strings.auth.give_email}
        </Text>
        <TextInput
          placeholder={R.strings.auth.email_placholder}
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
          errorMsg={R.strings.validation.name}
          value={formData?.email}
        />

        <HStack alignItems={"flex-start"} mt={R.unit.verticalScale(24)}>
          <Checkbox
            aria-label="checkbox"
            colorScheme="info"
            size={"lg"}
            checked={isAgree}
            onPress={onIsAgreePress}
          />
          <Text
            numberOfLines={2}
            color={R.color.black2}
            variant="title2"
            style={{ width: "100%" }}
            font={"regular"}
            gutterLeft={R.unit.scale(5)}
            gutterTop={-R.unit.verticalScale(3)}
          >
            {R.strings.auth.agree}
          </Text>
        </HStack>
      </VStack>

      <Button
        btnText={R.strings.comman.continue}
        btnPress={onSignupEmailContinuePress}
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

export default SignupEmailView;

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
