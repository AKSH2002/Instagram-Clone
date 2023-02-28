import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput, ScrollView,FlatList,TouchableOpacity, Alert } from 'react-native';
import HomeScreen from './Screens/HomeScreen';

export default function App() {

  return (
    <HomeScreen />
  );
}