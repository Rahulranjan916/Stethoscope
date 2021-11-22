import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/Front_page';
import {AppLoading} from 'expo';
import Navigator from './routes/Drawer';

export default function App() {
  return (
   <Navigator/>
  );
}

const styles = StyleSheet.create({
  
  },
);
