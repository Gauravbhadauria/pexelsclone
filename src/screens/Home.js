import {View, Text, StyleSheet, Image, StatusBar, FlatList, ScrollView,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BLACK, WHITE} from '../utils/Colors';
import {NEW_PHOTOS, POPULAR_VIDEOS, getData} from '../utils/Apis';
import PhotoItem from '../components/PhotoItem';
import VideoItem from '../components/VideoItem';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const navigation=useNavigation()
  useEffect(() => {
    getPhotos()
    getVideos()
  }, []);
  const getPhotos = () => {
    getData(NEW_PHOTOS, '?per_page=10').then(res => {
      console.log('photos', res);
      setPhotos(res.photos);
    });
  };
  const getVideos = () => {
    getData(POPULAR_VIDEOS, '?per_page=10').then(res => {
      console.log('videos', res);
      setVideos(res.videos);
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <View style={styles.topView}>
        <Image
          source={require('../images/banner.webp')}
          style={styles.banner}
        />
        <View style={styles.transLayout}>
          <Text style={styles.logo}>PexelsClone</Text>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("Search")
          }} style={styles.searchBox}
          >
            <Image
              source={require('../images/search.png')}
              style={styles.search}
            />
            <Text style={styles.placeholder}>Search Photos/Videos here...</Text>
          </TouchableOpacity>
          <Text style={styles.tagline}>Search 1000+ Photos/Videos here</Text>
        </View>
      </View>
      <ScrollView>
      <View style={styles.headingView}>
        <Text style={styles.heading}>New Photos</Text>
        <Text
          style={[
            styles.heading,
            {fontWeight: '500', textDecorationLine: 'underline'},
          ]}>
          View All
        </Text>
      </View>
      <View>
        <FlatList
          data={photos}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop:20}}
          renderItem={({item, index}) => {
            return <PhotoItem item={item} />;
          }}
        />
      </View>
      <View style={styles.headingView}>
        <Text style={styles.heading}>New Videos</Text>
        <Text
          style={[
            styles.heading,
            {fontWeight: '500', textDecorationLine: 'underline'},
          ]}>
          View All
        </Text>
      </View>
      <View style={styles.listView}> 
        <FlatList
          data={videos}
          contentContainerStyle={{marginTop:20}}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index}) => {
            return <VideoItem item={item} />;
          }}
        />
      </View>
      </ScrollView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  topView: {
    width: '100%',
    height: '40%',
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  transLayout: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
  },
  logo: {
    fontSize: 30,
    color: WHITE,
    fontWeight: '600',
    marginTop: 40,
    marginLeft: 15,
  },
  searchBox: {
    width: '90%',
    height: 50,
    backgroundColor: WHITE,
    alignSelf: 'center',
    marginTop: 70,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  search: {
    width: 30,
    height: 30,
  },
  placeholder: {
    fontSize: 16,
    color: '#9e9e9e',
    marginLeft: 15,
  },
  tagline: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  headingView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: BLACK,
  },
  listView:{marginBottom:100}
});
