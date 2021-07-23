import React from 'react'
import { Box, Center, Container, Heading, Stack, Text } from 'native-base'
import { BreedType } from '../types'
import DogImage from '../components/DogImage'
import { LightBlueColor, TextColor, VioletColor } from '../constants/Colors'

export interface ImageScreenProps {
  navigation: any
  route: any
}

export default function ImageScreen(props: ImageScreenProps) {
  const breed: BreedType = props.route.params
  return (
    <Stack pt="50px" flex='1' alignItems="center" bg={{
      linearGradient: {
        colors: [LightBlueColor, VioletColor],
        start: [0, 0],
        end: [0,1]
    }}}>
      <Heading color={TextColor}>{breed.name}</Heading>
      <Box pt="10px" w="90%">
        <DogImage bottomRounded={true} topRounded={true} breed={breed} />
      </Box>
    </Stack>
  )
}