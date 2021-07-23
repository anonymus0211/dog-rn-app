import React from 'react'
import { AspectRatio, Image, Text } from 'native-base'
import Loading from './Loading'
import { BreedType } from '../types'
import { BreedContext } from '../contexts'

export interface DogImageProps {
  breed: BreedType
  allRounded?: boolean
  topRounded?: boolean
  bottomRounded?: boolean
}

export default function DogImage({breed, allRounded = true, topRounded, bottomRounded}: DogImageProps) {
  const context = React.useContext(BreedContext)
  const [imageUri, setImageUri] = React.useState<string | null>(null)
  React.useEffect(() => {
    async function getImageUri(imageUri?: string) {
      if (imageUri) {
        return setImageUri(imageUri)
      }
      const dog = await context.getBreedWithImage(breed)
      setImageUri(dog.imageUri)
    }
    getImageUri(breed.imageUri)
  }, [breed.name])

  if (!imageUri) {
    return <Loading/>
  }

  return (
    <AspectRatio w='100%'>
      <Image
        rounded={allRounded ? 'lg': null}
        borderBottomRadius={bottomRounded ? null : 0}
        borderTopRadius={topRounded ? null : 0}
        source={{ uri: imageUri }}
        alt={breed.name}
      />
    </AspectRatio>

  )
}