import React from 'react'
import { BreedType } from './types'

interface IBreedContext {
  breedList: BreedType[]
  getBreedWithImage: (breed: BreedType) => Promise<BreedType & {imageUri: string}>
}

export const BreedContext = React.createContext<IBreedContext>({
  breedList: [],
  getBreedWithImage: (breed) => Promise.resolve({ ...breed, imageUri: '' })
})