import { NavigationContext } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Information = ({data}) => {
 const navigation = useContext(NavigationContext) 

  return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Text style={styles.projectName}>{data.projectName}</Text>
        <Pressable onPress={() => navigation.navigate('Details', {data})}>
          <Text style={styles.moreDetails}>...more details</Text>
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
  },
  projectName: {
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  moreDetails: {
    fontSize: 14,
    marginVertical: 13,
  },
});

export default Information;