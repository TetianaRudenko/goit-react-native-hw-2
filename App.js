import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , ImageBackground, Dimensions} from 'react-native';
import imageBg from "./assets/imageBg.png";
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import { useFonts } from 'expo-font';

//SplashScreen.preventAutoHideAsync();

const App = () => {
 useFonts({
   "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
   "Roboto-Medium": require('./assets/fonts/Roboto-Medium.ttf'),
   "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
 });

  return (
    <View style={styles.container}>
      <ImageBackground source={imageBg} resizeMode="cover" style={styles.image}>

        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </ImageBackground>


      <StatusBar style="auto" />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    //justifyContent: 'center',
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default App;
