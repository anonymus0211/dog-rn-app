import React from 'react'
import { Box, Divider, Pressable, Text} from 'native-base'
import { BreedType } from '../types'
import { ButtonBackground, TextColor } from '../constants/Colors'

export interface BreedListElementProps {
  breed: BreedType
  onPress: Function
  needDivider?: boolean
}

export default function BreedListElement(props: BreedListElementProps) {
  const handleOnPress = () => {
    props.onPress(props.breed)
  }

  return (
    <Pressable
      onPress={handleOnPress}
      px={5}
      py={3}
      rounded="md"
      bg={ButtonBackground}
      shadow={3}
    >
      <Text color={TextColor} fontSize="lg" bold={true}>{props.breed.name}</Text>
    </Pressable>
  )
}