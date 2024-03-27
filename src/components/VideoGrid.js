import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const VideoGrid = ({item}) => {
  console.log(item);
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
        style={{width: '90%', height: 
        '90%', borderRadius: 10}}
        onPress={() => {
          navigation.navigate('ViewVideo', {data: item});
        }}>
        <Image
          source={{uri: item.image}}
          style={{width: '100%', height: '100%', borderRadius: 10}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,.5)',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/video.png')}
            style={{width: 30, height: 30, tintColor: 'white'}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default VideoGrid;
