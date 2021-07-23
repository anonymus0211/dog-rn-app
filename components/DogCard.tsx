import React from 'react'
import DogImage from './DogImage'
import { BreedType } from '../types'
import { Heading, Stack } from 'native-base'
import { TextColor } from '../constants/Colors'

interface IDogCard {
  breed: BreedType
}

export default function DogCard(props: IDogCard) {
  return (
    <Stack>
      <Heading size="sm" color={TextColor} alignSelf="center" py="3">{props.breed.name}</Heading>
      <DogImage breed={props.breed} bottomRounded={true}></DogImage>
    </Stack>
  )
}