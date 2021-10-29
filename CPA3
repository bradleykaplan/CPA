//change screen code from https://reactnavigation.org/docs/getting-started

//import React, {useState} from 'react';
import React, { useState, useEffect } from "react";
import { StyleSheet, Button, View, Text, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

var bettervalue = 0;
//const [qbs, setqbs] = useState('');

function HomeScreen({ navigation }) {
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
      <Button
        title="Go to Trade"
        onPress={() => navigation.navigate('Trade')}
      />
      <Image
        style={{ flex: 1 }}
        source={require('./components/my-fantasy-football-team-is-kind-of-a-big-deal.jpg')
        }
      />
    </View>
  );
}

function LeagueSettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>League Settings Screen</Text>
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="number of QBs"
        onChangeText={(text) => {
          setqbs(text);
        }}
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="number of RBs"
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="number of WRs"
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="number of TEs"
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="number of D/STs"
      />
      <Button title="Go to Lineup" onPress={() => navigation.push('Lineup')} />
      <Button title="Go to Trade" onPress={() => navigation.push('Trade')} />
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
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="QB1"
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="QB2"
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="RB1"
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="RB2"
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="WR1"
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="WR2"
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="TE1"
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="D/ST"
      />
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

function TradeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Trade Screen</Text>
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
        <Stack.Screen name="Trade" component={TradeScreen} />
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
    flexDirection: 'column',
    margin: '20px',
    border: 'thick solid black',
  },
});

export default App;
