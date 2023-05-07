import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardHeader from './CardHeader';
import Carousel from './Carousel';
import ActionButtons from './ActionButtons';
import Information from './Information';

const Card = ({data}) => {
  return (
    <View style={styles.card}>
      <CardHeader authorName={data.authorName} />
      <Carousel data={data} />
      <Information data={data} />
      <ActionButtons data={data} />
    </View>
  );
};

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

export default Card;
