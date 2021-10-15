//change screen code from https://reactnavigation.org/docs/getting-started

import * as React from 'react';
import { StyleSheet, Button, View, Text, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation, props }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to League Settings"
        onPress={() => navigation.navigate('League Settings')}
      />
      <Button
        title="Go to Lineup"
        onPress={() => navigation.navigate('Lineup')}
      />
      <Image
        style={{flex:1}}
        source={{uri:'http://www.blogging4jobs.com/wp-content/uploads/2013/09/my-fantasy-football-team-is-kind-of-a-big-deal.jpg'}}
      />
    </View>
  );
}

function LeagueSettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>League Settings Screen</Text>
      <Button
        title="Go to Lineup"
        onPress={() => navigation.push('Lineup')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function LineupScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Lineup Screen</Text>
      <Button
        title="Go to League Settings"
        onPress={() => navigation.push('League Settings')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="League Settings" component={LeagueSettingsScreen} />
        <Stack.Screen name="Lineup" component={LineupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    flexDirection:'column',
    margin:'20px',
    border:'thick solid black',
  },

});

export default App;
