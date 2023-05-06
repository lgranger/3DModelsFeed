import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Card from './Card';
import mockData from '../mockData';

const CardList = () => {
  const renderItem = ({ item }) => <Card data={item} />;
  const separator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={mockData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={separator}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 2,
    color: '#ccc',
  },
});

export default CardList;
