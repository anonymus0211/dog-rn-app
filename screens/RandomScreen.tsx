import { Box, Heading, Stack, ZStack } from 'native-base';
import * as React from 'react';
import sample from 'lodash/sample'
import Draggable from '../components/Draggable';
import { BreedContext } from '../contexts';
import DogCard from '../components/DogCard';
import { BreedType } from '../types';
import Loading from '../components/Loading';
import { BoxBackground, LightBlueColor, TextColor, VioletColor } from '../constants/Colors';

export default function RandomScreen() {
  const context = React.useContext(BreedContext)
  const [elements, setElements] = React.useState<BreedType[]>([])

  React.useEffect(() => {
    async function populateImages() {
      setElements([
        await context.getBreedWithImage(sample(context.breedList) as BreedType),
        await context.getBreedWithImage(sample(context.breedList) as BreedType),
        await context.getBreedWithImage(sample(context.breedList) as BreedType),
      ])
    }

    populateImages()
  }, [])



  const onDropFinished = async (callback: Function) => {
    const [first, second, ...other] = elements
    const arr = new Array<BreedType>(
      await context.getBreedWithImage(sample(context.breedList) as BreedType),
      first, second
    )
    setElements(arr)
  }

  if (!elements.length) {
    return <Loading isFullscreen={true}/>
  }

  const boxList = elements.map((element, index) => {
    if (index === elements.length - 1) {
      return (<Draggable key={element.name} onDropFinished={onDropFinished}>
        <Box
          bg={BoxBackground}
          mt={index*20}
          ml={index*2}
          // size={64}
          width={64}
          rounded="lg"
          shadow={7}
        >
          <DogCard breed={element} />
        </Box>
      </Draggable>)
    }

    return (<Box
      key={element.name}
      bg={BoxBackground}
      width={64}
      mt={index * 20}
      ml={index * 2}
      rounded="lg"
      shadow={5}
    ><DogCard breed={element} /></Box>)
  })

  return (
    <Stack pt="20" bg={{
      linearGradient: {
        colors: [LightBlueColor, VioletColor],
        start: [0, 0],
        end: [0, 1]
    }}} flex='1'>
      <Heading color={TextColor} alignSelf="center" size="md">Pull down image to load new one</Heading>
      <ZStack mt="20" ml={10}>
        {boxList}
      </ZStack>
    </Stack>
  );
}