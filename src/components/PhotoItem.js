import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const PhotoItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{width: 300, height: 200, borderRadius: 10, marginLeft: 20}}
      onPress={() => {
        navigation.navigate('ViewPhoto', {data: item});
      }}>
      <Image
        source={{uri: item.src.original}}
        style={{width: '100%', height: '100%', borderRadius: 10}}
      />
    </TouchableOpacity>
  );
};

export default PhotoItem;
