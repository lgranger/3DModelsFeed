import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import AuthorInfo from './AuthorInfo';
import Carousel from './Carousel';
import ActionButtons from './ActionButtons';
import Information from './Information';

const {width} = Dimensions.get('window');

const Card = ({data, showModal}) => {
  return (
    <View style={styles.card}>
      <AuthorInfo authorName={data.authorName} />
      <Carousel images={data.images} showModal={() => showModal(data)} windowWidth={width}/>
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
