import { View } from 'react-native'
import React from 'react'
import { HStack } from 'native-base'
import Text from '../common/Text'
import R from '@app/res/R'

const SeparatorView = () => {
  return (
    <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        marginVertical={R.unit.verticalScale(24)}
      >
        <View
          style={{
            height: R.unit.scale(2),
            backgroundColor: R.color.gray3Light,
            flex: 0.4,
          }}
        />
        <Text variant="title" font={"medium"} align="center">
          {R.strings.auth.or_login}
        </Text>
        <View
          style={{
            height: R.unit.scale(2),
            backgroundColor: R.color.gray3,
            flex: 0.4,
          }}
        />
      </HStack>
  )
}

export default SeparatorView