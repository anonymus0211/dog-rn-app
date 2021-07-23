/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Home: undefined;
  Root: undefined;
  NotFound: undefined;
  Signin: undefined;
  Image: BreedType;
};

export type BottomTabParamList = {
  Home: undefined;
  BreedList: undefined;
  Random: undefined;
};

export type HomeTabParamList = {
  HomeScreen: undefined;
};

export type TabBreedListParamList = {
  TabBreedListScreen: undefined;
};

export type TabRandomParamList = {
  RandomScreen: undefined
};

export type BreedType = {
  name: string
  breed: string
  subBreed?: string
  imageUri?: string
}