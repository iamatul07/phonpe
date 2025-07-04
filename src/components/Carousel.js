import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const Carousel = () => {
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const carouselData = [
    {
      id: '1',
      image: require('../images/phone_pay_banner.png'),
    },
    {
      id: '2',
      image: require('../images/banner2.png'),
    },
    {
      id: '3',
      image: require('../images/banner3.png'),
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image source={item.image} style={styles.banner} resizeMode="cover" />
      </View>
    );
  };

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length) {
        setActiveIndex(0);
        flatListRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        setActiveIndex(activeIndex + 1);
        flatListRef.current.scrollToIndex({
          index: activeIndex,
          animation: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <View>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        scrollEnabled={true}
        snapToAlignment="center"
        ref={flatListRef}
        getItemLayout={getItemLayout}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  banner: {
    width: 410,
    height: verticalScale(120),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(20),
    borderRadius: moderateScale(5),
  },
});
