import React, { useState, useEffect } from "react";
import { StyleSheet, Button, View, Text, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fantasy from './components/Fantasy'

export default function App() {
  return (
    <Fantasy/>
  );
}