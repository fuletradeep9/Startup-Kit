import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import {
  FormControl,
  HStack,
  Icon,
  Input,
  Pressable,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import Text from "@app/components/common/Text";
import R from "@app/res/R";
import { useLoginModel } from "./LoginModel";
import EmailPasswordView from "@app/components/login/EmailPasswordView";
import PhoneNumberView from "@app/components/login/PhoneNumberView";
import Button from "@app/components/common/Button";
import SeparatorView from "@app/components/login/SeparatorView";
import SocialLogin from "@app/components/common/SocialLogin";
import {
  appleLogin,
  facebookLogin,
  googleLogin,
} from "@app/util/CommonFunctions";

const LoginView = ({}) => {
  const {
    onMobileViewPress,
    onEmailViewPress,
    isEmailViewSelected,
    onForgotPasswordPress,
    onSignupPress,
    onSignInPress,
  } = useLoginModel();
  return (
    <View style={{ flex: 1 }}>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <VStack flex={1}>
          <Text
            numberOfLines={1}
            color={R.color.black1}
            variant="h3"
            style={{ width: R.unit.scale(400) }}
            font={"bold"}
          >
            {R.strings.auth.welcome}
          </Text>
          <Text
            numberOfLines={2}
            color={R.color.black2}
            variant="title"
            style={{ width: R.unit.scale(400) }}
            font={"medium"}
          >
            {R.strings.auth.sign_continue}
          </Text>
        </VStack>
        <VStack>
          <R.svg.logo width={R.unit.scale(80)} height={R.unit.scale(80)} />
        </VStack>
      </HStack>

      <HStack
        backgroundColor={R.color.cardBgGrey}
        padding={R.unit.scale(10)}
        marginTop={R.unit.verticalScale(24)}
        borderRadius={R.unit.scale(5)}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <TouchableOpacity
          onPress={onEmailViewPress}
          style={
            isEmailViewSelected
              ? styles.selectedTabStyle
              : styles.disableTabStyle
          }
        >
          <Text
            color={isEmailViewSelected ? R.color.info : R.color.black2}
            variant="h0"
            font={"medium"}
            align="center"
          >
            {R.strings.comman.Email}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onMobileViewPress}
          style={
            !isEmailViewSelected
              ? styles.selectedTabStyle
              : styles.disableTabStyle
          }
        >
          <Text
            color={!isEmailViewSelected ? R.color.info : R.color.black2}
            variant="h0"
            font={"medium"}
            align="center"
          >
            {R.strings.comman.Mobile}
          </Text>
        </TouchableOpacity>
      </HStack>

      {isEmailViewSelected ? <EmailPasswordView /> : <PhoneNumberView />}

      <Text
        variant="title"
        font={"medium"}
        align="center"
        gutterTop={R.unit.verticalScale(24)}
        onPress={onForgotPasswordPress}
      >
        {R.strings.auth.forgot_password}
      </Text>

      <Button
        btnText={R.strings.comman.signin}
        btnIsLoading={false}
        btnPress={onSignInPress}
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
          {R.strings.auth.not_account}
        </Text>
        <Text
          onPress={onSignupPress}
          variant="title2"
          font={"medium"}
          align="center"
          color={R.color.info}
          fontWeight="600"
        >
          {R.strings.auth.signup}
        </Text>
      </HStack>
    </View>
  );
};

export default LoginView;

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
    shadowOpacity: 0.32,
    shadowRadius: 3.0,
    elevation: 3,
    borderRadius: R.unit.scale(5),
  },
  disableTabStyle: { flex: 0.5 },
});
