import React, { useState } from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const ScrollIndicator = ({ imagesLength, activeIndex }) => {
  const dots = [];
  for (let index = 0; index < imagesLength; index++) {
    dots.push(
      <View
        key={index}
        style={[
          styles.indicatorDot,
          activeIndex === index ? styles.activeDot : {},
        ]}
      />
    );
  }

  return <View style={styles.indicatorContainer}>{dots}</View>;
};

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = React.useRef(({ viewableItems }) => {
    setActiveIndex(viewableItems[0].index);
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            source={item}
            style={[styles.carouselImage, { width }]}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      <ScrollIndicator imagesLength={images.length} activeIndex={activeIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselImage: {
    height: 400,
    resizeMode: 'cover',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});

export default Carousel;
