import { useDispatch, useSelector } from "react-redux";
import { AppStackC, AuthStackC } from "@app/constants/navigation";
import { useNavigation } from "@react-navigation/native";
import { toastr } from "@app/components/common/ToastComponent";
import { useState } from "react";
import R from "@app/res/R";

export function useForgotPasswordModel() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState({});

  const onHeaderBtnPress = () => {
    navigation.goBack()
  };

  const onForgotPasswordSubmitPress = () => {
    navigation.navigate(AuthStackC.OTP_VERIFICATION)
  }

  const onOTPSubmitPress = () => {
    toastr.showToast('success',R.strings.auth.otp_success)
    navigation.navigate(AuthStackC.LOGIN_SCREEN)
  }

  return {
    onHeaderBtnPress,
    formData,
    setFormData,
    errorMsg,
    setErrorMsg,
    onForgotPasswordSubmitPress,
    onOTPSubmitPress
  };
}
