import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView, VStack, Heading, Divider, Center } from 'native-base';
import * as React from 'react';
import BreedListElement from '../components/BreedListElemenent';
import { LightBlueColor, VioletColor } from '../constants/Colors';

import { BreedContext } from '../contexts';
import { BreedType, RootStackParamList } from '../types';

interface BreedListScreenProps {
  navigation: StackNavigationProp<RootStackParamList>
}

export default function BreedListScreen({ navigation }: BreedListScreenProps) {
  const { breedList } = React.useContext(BreedContext)

  const navigateToImageScreen = (breed: BreedType) => {
    navigation.navigate('Image', breed)
  }

  const breedListElements = breedList.map((breed, index) => (
    <BreedListElement
      key={breed.name}
      needDivider={index !== 0}
      onPress={navigateToImageScreen}
      breed={breed}
    />))

  return (
    <Center pt="20" bg={{
      linearGradient: {
        colors: [LightBlueColor, VioletColor],
        start: [0, 0],
        end: [0, 1]
    }}}>
      <ScrollView width='90%' my="2">
        <VStack space="md">
          {breedListElements}
        </VStack>
      </ScrollView>
    </Center>
  )
}