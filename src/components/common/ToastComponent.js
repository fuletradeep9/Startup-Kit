import React, { useEffect } from "react";
import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  Toast,
  VStack,
  useToast,
} from "native-base";
import Text from "./Text";
import R from "@app/res/R";

export const toastr = {
  showToast: (
    status,
    description,
    isClosable = true,
    duration = 2500,
    ...rest
  ) => {
    Toast.show({
      placement: "top",
      render: ({ id }) => {
        return (
          <Alert
            maxWidth="100%"
            alignSelf="center"
            flexDirection="row"
            status={status ? status : "info"}
            variant={"left-accent"}
            placement="top"
            {...rest}
          >
            <VStack space={1} flexShrink={1} w="95%">
              <HStack
                flexShrink={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon />

                  <Text
                    numberOfLines={1}
                    color={R.color.black}
                    variant="title3"
                  >
                    {description}
                  </Text>
                </HStack>
                {isClosable ? (
                  <IconButton
                    variant="unstyled"
                    icon={<CloseIcon size="3" />}
                    _icon={{
                      color: "darkText",
                    }}
                    onPress={() => Toast.close(id)}
                  />
                ) : null}
              </HStack>
              {/* <Text px="6" color={"darkText"}>
                {description}
              </Text> */}
            </VStack>
          </Alert>
        );
      },
    });
  },
};
