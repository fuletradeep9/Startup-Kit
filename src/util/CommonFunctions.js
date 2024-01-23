import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager } from "react-native-fbsdk-next";
import appleAuth, {
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
} from "@invertase/react-native-apple-authentication";

export const googleLogin = () => {
  GoogleSignin.configure({
    androidClientId: "ADD_YOUR_ANDROID_CLIENT_ID_HERE",
    iosClientId:
      "765474605440-tephb3ilu4u7tj7if7gpg6en74lp46cc.apps.googleusercontent.com",
  });
  GoogleSignin.hasPlayServices()
    .then((hasPlayService) => {
      if (hasPlayService) {
        GoogleSignin.signIn()
          .then((userInfo) => {
            console.log(JSON.stringify(userInfo));
          })
          .catch((e) => {
            console.log("ERROR IS: " + JSON.stringify(e));
          });
      }
    })
    .catch((e) => {
      console.log("ERROR IS: " + JSON.stringify(e));
    });
};

export const facebookLogin = () => {
  LoginManager.logInWithPermissions(["public_profile"]).then(
    function (result) {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.log(
          "Login success with permissions: " +
            result.grantedPermissions.toString()
        );
      }
    },
    function (error) {
      console.log("Login fail with error: " + error);
    }
  );
};

export const appleLogin = async () => {
  // create login request for apple
  console.log("apple auth", appleAuth);
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: AppleAuthRequestOperation.LOGIN,
    requestedScopes: [
      AppleAuthRequestScope.EMAIL,
      AppleAuthRequestScope.FULL_NAME,
    ],
  });

  const { identityToken, nonce } = appleAuthRequestResponse;
  if (identityToken) {
    console.log("Apple Login Response", identityToken);
  }
};
