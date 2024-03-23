import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {THEME_COLOR} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);
  return (
    <View style={styles.contaner}>
      <StatusBar backgroundColor={THEME_COLOR} barStyle={'dark-content'} />
      <Image source={require('../images/logo.png')} style={styles.logo} />
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_COLOR,
  },
  logo: {
    width: '80%',
    height: '40%',
  },
});
