import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './Navigator/Navigation';
import LoginScreen from './Screens/AuthScreens/LoginScreen';

export default function App() {
  return (
    <Navigation />
    // <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
