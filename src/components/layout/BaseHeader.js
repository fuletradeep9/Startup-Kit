import React, { useEffect, useState } from "react";
import R from "@app/res/R";

import {
  View,
  ViewStyle,
  StyleSheet,
  Platform,
  Alert,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  SafeAreaView,
} from "react-native";
import Text from "@app/components/common/Text";
// import NavigationService from '@app/navigation/NavigationService';
import { useDispatch, useSelector } from "react-redux";
import { NavigationStackC } from "@app/constants/navigation";
import { HStack, Image, VStack } from "native-base";
import {
  Entypo,
  AntDesign,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";
import HeaderTopView from "../view/HeaderTopView";

const BaseHeader = (props) => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(1);
  //   const auth = useSelector((state) => state.auth);

  const {
    headerAbsolute = false,
    onLayout,
    onHeaderBtnPress,
    enableTabView,
    headerBtnText,
    headerBtnIcon,
    headerBtnColor,
    enableHeader = false,
  } = props;

  // useEffect(() => {
  //   if (auth && !auth.isAuthenticated) {
  //     NavigationService.stackFirst(NavigationStackC.AUTH_STACK);
  //   }
  // }, [auth]);

  const logoutClick = () => {
    Alert.alert("Logout", "Are you sure want to logout?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          //   var data = new FormData()
          //   data.append('param', "logOut");
          //   data.append('user_id', auth?.data?.user_id);
          //   data.append('lat', "123");
          //   data.append('long', "123");
          //   dispatch(signOut(data))
        },
      },
    ]);
  };

  const shareClick = () => {
    // NavigationService.navigate(AppStackC.INVITE_FRIEND_SCREEN);
  };

  return (
    <SafeAreaView
      style={styles.headerAbsoluteFalse}
      onLayout={(event) =>
        headerAbsolute ? onLayout(event.nativeEvent.layout) : null
      }
    >
      <View style={[styles.header]}>
        {enableHeader ? (
          <TouchableOpacity
          onPress={onHeaderBtnPress}
            style={{
              backgroundColor: R.color.white,
              padding: R.unit.scale(10),
              borderRadius: R.unit.scale(30),
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 3,
            }}
          >
            <R.svg.back
              height={R.unit.scale(25)}
              width={R.unit.scale(25)}
              color={R.color.red}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ height: R.unit.scale(25), width: R.unit.scale(25),margin: R.unit.scale(10), }} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: R.unit.containerWidth,
    // height: R.unit.scale(50),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: R.unit.scale(12),
    backgroundColor: R.color.white,
  },
  headerAbsoluteFalse: { backgroundColor: R.color.white },
  horizontalStyle: { flexDirection: "row", alignItems: "center" },
});

export default BaseHeader;
