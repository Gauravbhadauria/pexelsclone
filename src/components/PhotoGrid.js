import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ImageLoad from 'react-native-image-placeholder';
const PhotoGrid = ({item}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: Dimensions.get('window').width / 2,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          width: '90%',
          height: '90%',
          borderRadius: 10,
          overflow: 'hidden',
        }}
        onPress={() => {
          navigation.navigate('ViewPhoto', {data: item});
        }}>
        <ImageLoad
          source={{uri: item.src.original}}
          style={{width: '100%', height: '100%', borderRadius: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PhotoGrid;
