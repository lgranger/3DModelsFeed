import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Details from './components/Details';
import CardList from './components/CardList';
import { ProjectData } from './mockData';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

export type AppStackParamList = {
  CardList: undefined;
  Details: { data: ProjectData };
};

const Stack = createSharedElementStackNavigator<AppStackParamList>();

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
          sharedElements={(route) => {
            const { data } = route.params;
            const { index } = route.params;
            return [{ 
              id:`${data.id}.${index}.photo`,
              animation: 'move',
            }];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
