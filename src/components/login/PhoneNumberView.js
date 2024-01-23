import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { VStack } from 'native-base';
import PhoneInput from 'react-native-phone-number-input';
import { useLoginModel } from '@app/screens/login/LoginModel';
import R from '@app/res/R';

const PhoneNumberView = () => {
    const {
        phoneInputRef,
        formData,
        setFormData
      } = useLoginModel();
  return (
    <VStack>
        <PhoneInput
          ref={phoneInputRef}
          defaultCode="AU"
          layout="first"
          onChangeText={(text) => {
            console.log('****',text)
            setFormData({
                ...formData,
                phone_number: text
            });
          }}
          withDarkTheme
          autoFocus
          disableArrowIcon
          placeholder={R.strings.auth.phone_placeholder}
          containerStyle={styles.containerStyle}
          textContainerStyle={styles.textContainerStyle}
          countryPickerButtonStyle={styles.countryPickerButtonStyle}
        />
      </VStack>
  )
}

export default PhoneNumberView

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor: R.color.white,
        borderWidth: 1,
        borderColor: R.color.gray3Light+90,
        borderRadius: 2,
        width: "100%",
        marginTop: R.unit.verticalScale(18),
      },
      textContainerStyle:{ color:R.color.black1,backgroundColor:R.color.white },
      countryPickerButtonStyle:{ borderRightWidth:1,borderRightColor:R.color.gray3Light+80 }
})