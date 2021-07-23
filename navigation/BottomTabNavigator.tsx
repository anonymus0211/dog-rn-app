/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { LightBlueColor, TextColor, VioletColor } from '../constants/Colors';

import useColorScheme from '../hooks/useColorScheme';
import BreedListScreen from '../screens/BreedListScreen';
import HomeScreen from '../screens/HomeScreen';
import RandomScreen from '../screens/RandomScreen';
import { BottomTabParamList, HomeTabParamList, TabBreedListParamList, TabRandomParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      // tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
      tabBarOptions={{
        activeTintColor: LightBlueColor,
        showLabel: false,
        style: {
          backgroundColor: VioletColor,
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <BottomTab.Screen
        name={"Home"}
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="home" color={focused ? color: TextColor} />,
        }}
      />
      <BottomTab.Screen
        name={"BreedList"}
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="md-list-sharp" color={focused ? color: TextColor} />,
        }}
      />
      <BottomTab.Screen
        name="Random"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="search" color={focused ? color: TextColor} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HomeTabStack = createStackNavigator<HomeTabParamList>();

function HomeTabNavigator() {
  return (
      <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitle: 'Home',
          headerStyle: { backgroundColor: LightBlueColor, borderBottomWidth: 0, borderTopWidth: 0 }
        }}
      />
    </HomeTabStack.Navigator>
  )
}

const TabBreedListStack = createStackNavigator<TabBreedListParamList>();

function TabOneNavigator() {
  return (
    <TabBreedListStack.Navigator>
      <TabBreedListStack.Screen
        name="TabBreedListScreen"
        component={BreedListScreen}
        options={{
          headerShown: false,
          headerTitle: 'Breed List',
          headerStyle: { backgroundColor: LightBlueColor, borderBottomWidth: 0, borderTopWidth: 0 }
        }}
      />
    </TabBreedListStack.Navigator>
  );
}

const TabRandomStack = createStackNavigator<TabRandomParamList>();

function TabTwoNavigator() {
  return (
    <TabRandomStack.Navigator>
      <TabRandomStack.Screen
        name="RandomScreen"
        component={RandomScreen}
        options={{
          headerShown: false,
          headerTitle: 'Random Images',
          headerStyle: { backgroundColor: LightBlueColor, borderBottomWidth: 0, borderTopWidth: 0 }
        }}
      />
    </TabRandomStack.Navigator>
  );
}
