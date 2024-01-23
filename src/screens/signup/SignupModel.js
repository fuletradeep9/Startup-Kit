import { useDispatch, useSelector } from "react-redux";
import { AppStackC, AuthStackC } from "@app/constants/navigation";
import { useNavigation } from "@react-navigation/native";
import { toastr } from "@app/components/common/ToastComponent";
import { useState } from "react";

export function useSignupModel() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [showNameField, setShowNameField] = useState(true);
  const [showEmailField, setShowEmailField] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [isAgree, setIsAgree] = useState(false);

  const onHeaderBtnPress = () => {
    toastr.showToast("success", "This is Toast");
  };

  const onForgotPasswordPress = () => {
    navigation.navigate(AuthStackC.FORGOT_PASSWORD_SCREEN);
  };

  const onSignupNameContinuePress = () => {
    setShowEmailField(true);
    setShowNameField(false);
    setShowPasswordField(false);
  };

  const onSignupEmailContinuePress = () => {
    setShowEmailField(false);
    setShowNameField(false);
    setShowPasswordField(true);
  };

  const onSignupPasswordContinuePress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: AuthStackC.HOME_SCREEN }],
    });
  };

  const onSigninTextPress = () => {
    navigation.navigate(AuthStackC.LOGIN_SCREEN)
  }

  const onIsAgreePress = () => {
    setIsAgree(!isAgree);
  };

  return {
    onHeaderBtnPress,
    formData,
    setFormData,
    showPassword,
    setShowPassword,
    errorMsg,
    setErrorMsg,
    onForgotPasswordPress,
    onSignupNameContinuePress,
    showNameField,
    showEmailField,
    showPasswordField,
    isAgree,
    setIsAgree,
    onIsAgreePress,
    onSignupEmailContinuePress,
    showConfirmPassword,
    setShowConfirmPassword,
    onSignupPasswordContinuePress,
    onSigninTextPress
  };
}
