import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {THEME_COLOR, WHITE} from '../utils/Colors';

const ViewPhoto = () => {
  const route = useRoute();
  const navigation=useNavigation()
  console.log('photo data', route.params.data);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={THEME_COLOR} />
      <Image
        source={{uri: route.params.data.src.original}}
        style={styles.photo}
      />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}
        onPress={()=>{
          navigation.goBack()
        }}>
        <Image
              source={require('../images/back.png')}
              style={styles.icon}
            />
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
      <Text style={styles.photographer}>{'Photographer: '+route.params.data.photographer}</Text>
    </View>
  );
};

export default ViewPhoto;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
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
  photographer:{
    fontSize:18,
    color:'white',
    position:'absolute',
    bottom:50,
    alignSelf:'center'
  }
});
