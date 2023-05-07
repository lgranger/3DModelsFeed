import React, { useContext, useRef } from 'react';
import { 
  Text, 
  StyleSheet, 
  ScrollView, 
  View, 
  FlatList, 
  Pressable, 
  Image, 
  Dimensions
 } from 'react-native';
import { ProjectData } from '../mockData';
import { NavigationContext, useRoute } from '@react-navigation/native';
import CardHeader from './CardHeader';
import ActionButtons from './ActionButtons';
import { SharedElement } from 'react-navigation-shared-element';

const { width } = Dimensions.get('window');

const Details = () => {
  const route = useRoute();
  const startIndex = (route.params as { index: number }).index;
  const data = (route.params as { data: ProjectData }).data;
  const setStartIndex = (route.params as { setStartIndex: React.Dispatch<React.SetStateAction<number>> }).setStartIndex;
  const navigation = useContext(NavigationContext);
  const flatListRef = useRef<FlatList>();

  navigation.setOptions({
    headerTitle: data.projectName,
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      <FlatList
        ref={flatListRef}
        data={data.images}
        initialScrollIndex={startIndex}
        onScrollToIndexFailed={() => { 
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({ index: startIndex, animated: true });
          });
        }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
        <Pressable onPress={() => navigation.goBack()}>
          <SharedElement id={`${data.id}.${index}.photo`}>
          <Image
            key={index}
            source={item}
            style={[styles.carouselImage, { width }]}
          />
          </SharedElement>
          </Pressable>
        )}
        keyExtractor={(_, index) => index.toString()}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={({ viewableItems }) => {
          setStartIndex(viewableItems[0].index);
        }}
      />
    </View>
      <CardHeader authorName={data.authorName} />
      <ActionButtons data={data} />
      <Text style={styles.description}>{data.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  carouselImage: {
    height: 400,
    resizeMode: 'cover',
  },
});

export default Details;
