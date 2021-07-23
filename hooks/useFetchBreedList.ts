import React from 'react'
import capitalize from 'lodash/capitalize'
import { BreedType } from '../types'
import * as SplashScreen from 'expo-splash-screen';

export default function useFetchBreedList() {
  const [breedList, setBreedList] = React.useState<BreedType[]>([])

  React.useEffect(() => {
    async function loadData() {
      try {
        SplashScreen.preventAutoHideAsync();

        const res = await fetch('https://dog.ceo/api/breeds/list/all').then(res => res.json())
        const list: BreedType[] = []

        if (res.message) {
          const breedKeys = Object.keys(res.message)
          for (const breed of breedKeys) {
            if (res.message[breed].length) {
              for (const subkey of res.message[breed]) {
                list.push({
                  name: `${capitalize(subkey)} ${capitalize(breed)}`,
                  breed: breed,
                  subBreed: subkey,
                })
              }
            } else {
              list.push({
                name: capitalize(breed),
                breed,
              })
            }
          }
        }

      setBreedList(list)
      } catch (err) {
        setBreedList([])
      } finally {
        SplashScreen.hideAsync();
      }
    }
    loadData()
  }, [])

  return breedList
}