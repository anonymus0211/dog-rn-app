import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import {LinearGradient} from 'expo-linear-gradient'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { BreedContext } from './contexts';
import useFetchBreedList from './hooks/useFetchBreedList';
import { BreedType } from './types';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const breedList = useFetchBreedList();

  const defaultContext = {
    breedList,
    getBreedWithImage: async(breed: BreedType): Promise<BreedType & {imageUri: string}> => {
    const breedUrl = [breed.breed, breed.subBreed].filter(Boolean).join('/')
    const resp = await fetch(`https://dog.ceo/api/breed/${breedUrl}/images/random`).then(res => res.json())

    return {
      ...breed,
      imageUri: resp.message
    }
  }
  }

  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (

      <BreedContext.Provider value={defaultContext}>
        <NativeBaseProvider config={config}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </NativeBaseProvider>
        </BreedContext.Provider>

    )
  }
}
