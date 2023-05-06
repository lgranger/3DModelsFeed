import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Details from './components/Details';
import CardList from './components/CardList';
import { ProjectData } from './mockData';

export type AppStackParamList = {
  CardList: undefined;
  Details: { data: ProjectData };
};

const Stack = createStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardList">
        <Stack.Screen 
          name="CardList" 
          component={CardList}
          options={{ title: '3D Models' }}
        />
        <Stack.Screen 
          name="Details" 
          component={Details}
          options={{ 
            title: '',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
