//Original starter code from CovidDemo.js (https://github.com/tjhickey724/cs153aFall21/blob/main/components/CovidDemo.js). Some code may be leftover from CovidDemo

/*
  Quiz4.js - this component will get the names of a github user's repositories
*/
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View, FlatList } from "react-native";


const Quiz4 = (props) => {
  const [loading,setLoading] = useState(true)
  const [userid, setUserid] = useState('');
  const [text, setText] = useState('a');
  const [data,setData] = useState([]);
  const [debugging, setDebugging] = useState(false)

  const getCovidData = async (userid) => {
    try{
      let result = await fetch('https://api.github.com/users/'+userid+'/repos')
      let cdata = await result.json()
      cdata = cdata.sort(covid_before)
      setData(cdata)
      setLoading(false)
    }catch(e){
      console.log(`error in getCovidData: ${JSON.stringify(e)}`)
    }

  }

    function covid_before(a, b) {
    var keyA = a.id,
      keyB = b.id;
    // Compare the 2 dates
    //if (a.state<b.state) return -1;
    //if (a.state>b.state) return 1;
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
  }

  useEffect(() => {
    getCovidData(userid)
  }, [userid]);


  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection:'row'}}>
        <Text style={{flex:1,backgroundColor:'#aaa'}}>{item['name'].slice(0,30)}</Text>
     </View>
  )}

  let debugView = 
  <View style={{padding:20,margin:10, flex: 1, justifyContent: 'space-around', alignItems: 'space-around'}}>
      <Text style={{color:'red', backgroundColor: 'black', fontSize:40,textAlign:'center', flex: .1, justifyContent: 'space-around', alignItems: 'space-around'}}>
             Github Viewer
          </Text>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:13}}>github Id:</Text>
        <TextInput
          style={{height: 17}}
          placeholder="userid"
          onChangeText={text => {setUserid(text)}}
        />
      </View>
  <Button
                  title={(debugging?'show':'show')+" repositories" }
                  color="green"
                  onPress = {() => setDebugging(!debugging)}
                  />
                  <View style={{flexDirection:'row'}}>
        <Text style={{flex:1,backgroundColor:'#eee'}}>NONE</Text>
     </View>
     <Text> DEBUGGING </Text>
<Text> userId:{userid} </Text>
<Text> showReps:{debugging.toString()} </Text>
<Text>  repos.length = {data.length}</Text>
      </View>
  if (debugging) {
    debugView =
    <View style={{padding:20,margin:10, flex: 1, justifyContent: 'space-around', alignItems: 'space-around'}}>
      <Text style={{color:'red', backgroundColor: 'black', fontSize:40,textAlign:'center', flex: .1, justifyContent: 'space-around', alignItems: 'space-around'}}>
             Github Viewer
          </Text>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:13}}>github Id:</Text>
        <TextInput
          style={{height: 17}}
          placeholder="userid"
          onChangeText={text => {setUserid(text)}}
        />
      </View>
      <Button
                  title={(debugging?'hide':'hide')+" repositories" }
                  color="grey"
                  onPress = {() => setDebugging(!debugging)}
                  />
      <FlatList
        data={data.slice(0,30)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text> DEBUGGING </Text>
<Text> userId:{userid} </Text>
<Text> showReps:{debugging.toString()} </Text>
<Text>  repos.length = {data.length}</Text>
      </View>
  }

  return (
    
    <View>
{debugView}
    </View>
  );
}

//new line code from https://stackoverflow.com/questions/32469570/how-can-i-insert-a-line-break-into-a-text-component-in-react-native
//<Text> DEBUGGING </Text>
//<Text> userId:{userid} </Text>
//<Text> showReps:{debugging.toString()} </Text>
//<Text>  repos.length = {data.length}</Text>
export default Quiz4;
