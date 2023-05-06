import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { ProjectData } from '../mockData';
import { useRoute } from '@react-navigation/native';
import CardHeader from './CardHeader';
import Carousel from './Carousel';
import ActionButtons from './ActionButtons';

const Details = () => {
  const route = useRoute();
  const data = (route.params as { data: ProjectData }).data;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CardHeader authorName={data.authorName} />
      <Carousel images={data.images} />
      <Text style={styles.projectName}>{data.projectName}</Text>
      <ActionButtons data={data} />
      <Text style={styles.description}>{data.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
    paddingHorizontal: 12,
  },
  projectName: {
    fontSize: 18,
    margin: 10,
  },
});

export default Details;
