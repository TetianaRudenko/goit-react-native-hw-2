import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import imageBg from './assets/photoBg.png';
import RegistrationScreen from './Screens/RegistrationScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBg} resizeMode="cover" style={styles.background} >
      <RegistrationScreen />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: 420,
    height: 880,
    //flex: 1,
    justifyContent: 'center',
//position: "absolute",
   // left: 0,
   // top: 0,
  },
  
});
