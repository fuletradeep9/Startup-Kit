import { View, Text } from 'react-native'
import React from 'react'
import FoodInsightView from './FoodInsightView'
import BaseLayout from '@app/components/layout'
import R from '@app/res/R'
import { useFoodInsightModel } from './FoodInsightModel'

const FoodInsightControler = (props) => {
  const {onHeaderBtnPress} = useFoodInsightModel()
  return (
    <BaseLayout
      enableHeader={true}
      barStyle={"dark-content"}
      statusBarBg={R.color.primaryDark}
      enableTabView={true}
      disableScrollView={true}
      headerBtnText={'Back to order'}
      headerBtnIcon={'arrow-back'}
      headerBtnColor={R.color.red}
      onHeaderBtnPress={onHeaderBtnPress}
    >
      <FoodInsightView {...props} />
    </BaseLayout>
  )
}

export default FoodInsightControler