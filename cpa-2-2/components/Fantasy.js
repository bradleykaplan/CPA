//change screen code from https://reactnavigation.org/docs/getting-started

//import React, {useState} from 'react';
import React, { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import { StyleSheet, Button, View, Text, TextInput, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import readXlsxFile from 'read-excel-file'

var bettervalue = 0;

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
        source={require('./my-fantasy-football-team-is-kind-of-a-big-deal.jpg')
        }
      />
    </View>
  );
}

function LeagueSettingsScreen({ navigation }) {
  const [qbs, setqbs] = useState('');
  const [rbs, setrbs] = useState('');
  const [wrs, setwrs] = useState('');
  const [tes, settes] = useState('');
  const [defs, setdefs] = useState('');
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
        onChangeText={(text) => {
          setrbs(text);
        }}
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="number of WRs"
        onChangeText={(text) => {
          setwrs(text);
        }}
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="number of TEs"
        onChangeText={(text) => {
          settes(text);
        }}
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="number of D/STs"
        onChangeText={(text) => {
          setdefs(text);
        }}
      />
      <Button title="Go to Lineup" onPress={() => navigation.push('Lineup')} />
      <Button title="Go to Trade" onPress={() => navigation.push('Trade')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text> DEBUGGING </Text>
<Text> QBs:{qbs} </Text>
<Text> RBs:{rbs} </Text>
<Text> WRs:{wrs} </Text>
<Text> TEs:{tes} </Text>
<Text> DEFs:{defs} </Text>
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
    </View>
  );
}

function TradeScreen({ navigation }) {
  const [loading,setLoading] = useState(true)
  const [data,setData] = useState([]);
  const getpoints = async () => {
      let cdata = require('./fantasyprojections_test.xlsx')
      setData(cdata)
      setLoading(false)

  }
  //from https://www.codegrepper.com/code-examples/javascript/frameworks/react/reactjs+read+excel+file
  //const input = data.getElementById('fantasyprojections_test.xlsx') 
//input.addEventListener('change', () => { 
  //readXlsxFile(input.files[0]).then((rows) => { 
    // `rows` is an array of rows    // each row being an array of cells. 
  //})})

  useEffect(() => {
    getpoints()
  });
  //not exactly sure how to implement with excel file
  <FlatList
        data={data.slice(0,2)}
      />
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Trade Screen</Text>
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="Your Player"
      />
      <TextInput
        style={{ fontSize: 20, backgroundColor: 'yellow' }}
        placeholder="Opponent's Player"
      />
      <Button
        title="Go to League Settings"
        onPress={() => navigation.push('League Settings')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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

//<Button
        //title="Go back to first screen in stack"
        //onPress={() => navigation.popToTop()}
      ///>