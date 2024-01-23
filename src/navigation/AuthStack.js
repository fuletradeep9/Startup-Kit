import { AuthStackC } from "@app/constants/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackScreen from "@app/screens/misc/AuthStackScreen";
import LoginController from "@app/screens/login/LoginController";
import ForgotPasswordController from "@app/screens/forgot_password/ForgotPasswordController";
import SignupController from "@app/screens/signup/SignupController";
import SignupEmailView from "@app/screens/signup/SignUpEmailVIew";
import SignupPasswordView from "@app/screens/signup/SignupPasswordView";
import HomeController from "@app/screens/home/HomeController";
import OTPVerificationView from "@app/screens/forgot_password/OTPVerificationView";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={AuthStackC.AUTH_STACK_SCREEN} swipeEnabled={true} gestureEnabled={true}>
      <Stack.Screen
        name={AuthStackC.AUTH_STACK_SCREEN}
        component={AuthStackScreen}
        options={() => ({
          title: AuthStackC.AUTH_STACK_SCREEN,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={AuthStackC.LOGIN_SCREEN}
        component={LoginController}
        options={() => ({
          title: AuthStackC.LOGIN_SCREEN,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={AuthStackC.FORGOT_PASSWORD_SCREEN}
        component={ForgotPasswordController}
        options={() => ({
          title: AuthStackC.FORGOT_PASSWORD_SCREEN,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={AuthStackC.SIGNUP_SCREEN}
        component={SignupController}
        options={() => ({
          title: AuthStackC.SIGNUP_SCREEN,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={AuthStackC.SIGNUP_EMAIL_SCREEN}
        component={SignupEmailView}
        options={() => ({
          title: AuthStackC.SIGNUP_EMAIL_SCREEN,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={AuthStackC.SIGNUP_PASSWORD_SCREEN}
        component={SignupPasswordView}
        options={() => ({
          title: AuthStackC.SIGNUP_PASSWORD_SCREEN,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={AuthStackC.HOME_SCREEN}
        component={HomeController}
        options={() => ({
          title: AuthStackC.HOME_SCREEN,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={AuthStackC.OTP_VERIFICATION}
        component={OTPVerificationView}
        options={() => ({
          title: AuthStackC.OTP_VERIFICATION,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
