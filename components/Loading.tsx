import React from 'react'
import { Center, Spinner } from "native-base";
import { LightBlueColor, VioletColor } from '../constants/Colors';

interface LoadingProps {
  isFullscreen?: boolean
}

export default function Loading({ isFullscreen }: LoadingProps) {
  if (isFullscreen) {
    return (
      <Center flex='1' bg={{
        linearGradient: {
          colors: [LightBlueColor, VioletColor],
          start: [0, 0],
          end:[0,1]
        }
      }}>
        <Spinner></Spinner>
      </Center>
    )
  }
  return <Spinner/>
}