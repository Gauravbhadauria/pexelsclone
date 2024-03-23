import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BLACK, THEME_COLOR, WHITE} from '../utils/Colors';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
const ViewPhoto = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(false);
  const [paused, setPaused] = useState(false);
  console.log('photo data', route.params.data);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      setPaused(true);
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 5000);
    }
  }, [isClicked]);
  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={THEME_COLOR} />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../images/back.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={styles.backBtn}>
            <Image
              source={require('../images/download.png')}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.backBtn, {marginLeft: 20}]}>
            <Image
              source={require('../images/share.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.videoView}
        onPress={() => {
          setIsClicked(true);
        }}>
        <Video
          resizeMode="cover"
          paused={paused}
          source={{uri: route.params.data.video_files[0].link}}
          style={styles.video}
          onProgress={x => {
            console.log(x);
            setProgress(x);
            if (x.currentTime === x.seekableDuration) {
              setPaused(true);
            }
          }}
        />
        {isClicked && (
          <TouchableOpacity
            style={[
              styles.videoView,
              {
                backgroundColor: 'rgba(0,0,0,.5)',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
              },
            ]}>
            <TouchableOpacity
              onPress={() => {
                setPaused(!paused);
              }}>
              <Image
                source={
                  paused
                    ? require('../images/play-button.png')
                    : require('../images/pause-button.png')
                }
                style={styles.playBtn}
              />
            </TouchableOpacity>
            <View style={styles.sliderView}>
              <Text style={styles.time}>
                {progress ? format(progress.currentTime) : 0}
              </Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                value={progress.currentTime}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#9e9e9e"
              />
              <Text style={styles.time}>
                {' '}
                {progress ? format(progress.seekableDuration) : 0}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      <Text style={styles.photographer}>
        {'Photographer: ' + route.params.data.user.name}
      </Text>
    </View>
  );
};

export default ViewPhoto;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    position: 'absolute',
    marginTop: 40,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    top: 10,
  },
  backBtn: {
    width: 50,
    height: 50,
    backgroundColor: WHITE,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  photographer: {
    fontSize: 18,
    color: 'white',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  video: {
    width: '100%',
    height: 200,
  },
  videoView: {
    width: '100%',
    height: 200,
  },
  playBtn: {
    width: 40,
    height: 40,
    tintColor: WHITE,
  },
  sliderView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  time: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  slider: {width: '76%', height: 40},
});
