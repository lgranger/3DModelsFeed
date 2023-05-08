import React from 'react';
import { Text, StyleSheet, ScrollView, Pressable, View, Dimensions } from 'react-native';
import AuthorInfo from './AuthorInfo';
import Carousel from './Carousel';
import ActionButtons from './ActionButtons';
import { Ionicons as Icon } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const detailsWidth = width * .88

const Header = ({projectName, onClose}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.projectName}>{projectName}</Text>
      <Pressable style={styles.button} onPress={onClose}>
        <Icon name="close-outline" size={20} color="#000" />
      </Pressable>
    </View>
  );
};

const Details = ({data, onClose}) => {
  return (
    <>
      <Header projectName={data.projectName} onClose={onClose} />
      <Carousel images={data.images} showModal={onClose} windowWidth={detailsWidth} />
      <AuthorInfo authorName={data.authorName} />
      <ScrollView style={styles.descriptionContainer} showsVerticalScrollIndicator={true}>
      <Text style={styles.description}>{data.description}</Text>
      </ScrollView>
      <ActionButtons data={data} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 10,
    paddingHorizontal: 12,
  },
  descriptionContainer: {
    maxHeight: '30%',
  },
  projectName: {
    fontSize: 18,
    marginTop: 10,
    marginHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginRight: 5,
  },
});

export default Details;
