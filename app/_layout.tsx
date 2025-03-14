import { View, Text } from 'react-native'
import React from 'react'
import '../global.css'
import { Slot } from 'expo-router'

const _layout = () => {
  return (
    <View className='bg-white'>
      <Slot/>
    </View>
  )
}

export default _layout
