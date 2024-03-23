import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const VideoItem = ({item}) => {
  console.log(item);
  const navigation=useNavigation()
  return (
    <TouchableOpacity activeOpacity={.8} style={{width: 300, height: 200, borderRadius: 10, marginLeft: 20}}
    onPress={()=>{
        navigation.navigate("ViewVideo",{data:item})
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
  );
};

export default VideoItem;
