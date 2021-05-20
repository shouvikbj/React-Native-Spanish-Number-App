import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Sound from 'react-native-sound';
import logo from './assests/logo.png';

const soundList = [
  require('./assests/one.wav'),
  require('./assests/two.wav'),
  require('./assests/three.wav'),
  require('./assests/four.wav'),
  require('./assests/five.wav'),
  require('./assests/six.wav'),
  require('./assests/seven.wav'),
  require('./assests/eight.wav'),
  require('./assests/nine.wav'),
  require('./assests/ten.wav'),
];

const App = () => {
  const playSound = sound => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('NOT ABLE TO PLAY SOUND');
      }
    });
    setTimeout(() => {
      soundVar.play();
    }, 500);
    soundVar.release();
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#1b262c" />
      <Image style={styles.logo} source={logo} />
      <View style={styles.gridContainer}>
        {soundList.map((sound, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                playSound(sound);
              }}
              style={styles.box}>
              <Text style={styles.text}>{index + 1}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginVertical: 6,
    backgroundColor: '#0f4c75',
    borderRadius: 50,
    shadowColor: '#393e46',
    elevation: 5,
    shadowRadius: 4,
  },
  text: {
    fontSize: 50,
    color: '#ff4301',
  },
});
