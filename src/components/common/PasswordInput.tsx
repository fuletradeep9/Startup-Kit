import React, { useState, useEffect, useRef } from "react";
import {
  TextInput as TextInputR,
  View,
  StyleSheet,
  TextInputProps,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Image,
} from "react-native";

import R from "@app/res/R";
import Text from "./Text";
import {
  FormControl,
  Icon,
  Input,
  Pressable,
  Spinner,
  WarningOutlineIcon,
} from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

interface PropsI extends TextInputProps {
  onChangeText?: (text: string) => void;
  onHandleClear?: () => void;
  containerStyle?: any;
  inputContainer?: any;
  style?: any;
  label: string;
  showCancelText?: boolean;
  editable?: boolean;
  helperText?: string;
  isRequired?: boolean;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  show: boolean;
  setShow: () => void;
  placeholder: string;
  errorMsg: string;
  isError: boolean;
  value: string;
}

const PasswordInput: React.FC<PropsI> = (props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    // update value when receives from parent
    setValue(props.value || "");
  }, [props.value]);

  const inputRef = useRef<any>(null);

  const handleChangeText = (text: string) => {
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  return (
    <View
      style={{
        ...props.containerStyle,
      }}
    >
      <FormControl
        isInvalid={props?.isError && props?.value.length !== 0}
        isRequired={props?.isRequired}
        mt={R.unit.verticalScale(12)}
      >
        <FormControl.Label>{props?.label}</FormControl.Label>
        <Input
          p={R.unit.scale(12)}
          placeholder={props?.placeholder}
          placeholderTextColor={R.color.gray3Light}
          size="xl"
          InputLeftElement={
            <Image
              source={R.image.password()}
              style={{
                width: R.unit.scale(20),
                height: R.unit.scale(20),
                marginLeft: R.unit.scale(8),
                tintColor:
                  props?.isError && props?.value.length !== 0
                    ? R.color.red
                    : R.color.info,
              }}
              resizeMode="contain"
            />
          }
          type={props?.show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => props?.setShow()}>
              <Icon
                as={
                  <MaterialIcons
                    name={props?.show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          borderColor={R.color.gray3Light}
          onChangeText={handleChangeText}
        />
        <FormControl.HelperText>{props?.helperText}</FormControl.HelperText>
        <FormControl.ErrorMessage mt={-R.unit.scale(1)} leftIcon={<WarningOutlineIcon size="xs" />}>
          {props?.errorMsg}
        </FormControl.ErrorMessage>
      </FormControl>
    </View>
  );
};
export default PasswordInput;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection: "row",
    // borderBottomWidth: R.unit.scale(1),
    // borderColor: R.color.gray4,
    // borderRadius: R.unit.scale(5),
    // marginTop: R.unit.scale(100),
    // backgroundColor: 'green',
  },
  input: {
    flex: 1,
    height: 75,
    padding: R.unit.scale(12),
    fontFamily: R.font.Regular,
    fontSize: R.unit.scale(12),
    color: R.color.white,
  },
  textButton: {
    color: R.color.primaryDark,
    fontFamily: R.font.Regular,
    fontSize: R.unit.scale(10),
  },
  labelContainer: {
    position: "absolute",
    paddingHorizontal: R.unit.scale(8),
    backgroundColor: "#8c5bba",
  },
  label: {
    fontFamily: R.font.Regular,
    fontSize: R.unit.scale(16),
  },
  error: {
    marginTop: R.unit.scale(4),
    marginLeft: R.unit.scale(12),
    fontSize: R.unit.scale(12),
    color: R.color.white,
    fontFamily: R.font.Regular,
  },
});
