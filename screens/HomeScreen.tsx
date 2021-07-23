import { StackNavigationProp } from '@react-navigation/stack'
import sample from 'lodash/sample'
import { Box, Button, Container, Heading, Stack, Text} from 'native-base'
import { StyleSheet} from 'react-native'
import React, { useContext } from 'react'
import DogImage from '../components/DogImage'
import Loading from '../components/Loading'
import { BoxBackground, ButtonBackground, LightBlueColor, TextColor, VioletColor } from '../constants/Colors'
import { BreedContext } from '../contexts'
import { BreedType, RootStackParamList } from '../types'

interface IHomeScreen {
  navigation: StackNavigationProp<RootStackParamList>
}
export default function HomeScreen(props: IHomeScreen) {
  const context = useContext(BreedContext)
  const getRandomBreed = () => sample(context.breedList) as BreedType
  const [randomBreed, setRandomBreed] = React.useState<BreedType>()

  React.useEffect(() => {
    setRandomBreed(getRandomBreed() as BreedType)
  }, [context.breedList.length])

  const handleGetRandom = () => setRandomBreed(getRandomBreed())

  if (!randomBreed) {
    return <Loading></Loading>
  }

  return (
    <Box flex="1" pt="20" bg={{
      linearGradient: {
        colors: [LightBlueColor, VioletColor],
        start: [0, 0],
        end: [0,1],
      }
    }}>
      <Stack alignSelf="center" w="90%" space="sm" my="2" shadow={0}>
        <Heading style={styles.headText} my={2}>Dog of the day</Heading>
        <Box rounded="lg" bg={BoxBackground} shadow={5}>
            <DogImage topRounded={true} breed={randomBreed}></DogImage>
          <Text px={5} py={2} style={styles.dogNameText} fontSize="lg" bold={true} >{randomBreed.name}</Text>
        </Box>

        <Button alignSelf="flex-end" w="50%" style={styles.button} onPress={handleGetRandom}>Another dog</Button>
      </Stack>
    </Box>

  )
}

const styles = StyleSheet.create({
  headText: {
    color: TextColor
  },
  dogNameText: {
    color: TextColor,
  },
  button: {
    backgroundColor: ButtonBackground,
  }
})