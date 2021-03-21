import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  container1: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  btn: {
    padding: 40,
    margin: 100,
  },
  text1: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
    width: 200,
    marginTop:100
  },
  maper: {
    backgroundColor: "pink",
    padding: 20,
    margin: 10,
    paddingHorizontal: 160,
  },
});

const App = () => {
  const [state, setState] = useState("dsadssad");
  const [state1, setState1] = useState();
  const sub = () => {
    setState("mano");
  };
  const [people, setName] = useState([
    { name: "shaun", key: "1" },
    { name: "yoshi", key: "2" },
    { name: "mario", key: "3" },
    { name: "luigi", key: "4" },
    { name: "peach", key: "5" },
    { name: "toad", key: "6" },
    { name: "bower", key: "7" },
  ]);
  const datahandle=(id)=>{
setName((prev)=>{
return prev.filter(ans=>ans.key !==id)
})
  }
  return (
    <View style={styles.container}>
      <FlatList
      keyExtractor={(item)=>{item.key}}
        data={people}
        renderItem={({ item }) =>
        <TouchableOpacity onPress={()=>datahandle(item.key)}>
        <Text style={styles.text1}>{item.name}</Text>
        </TouchableOpacity>}
      />

      {/* <ScrollView>
      <View style={styles.container1}>
        <Text>oeaeedaeda</Text>
        <Text>{state1}</Text>

        <TextInput
          style={styles.text1}
          onChangeText={(val) => setState1(val)}
        />
        <Text>{state}</Text>
        <TextInput
          multiline
          keyboardType="numeric"
          style={styles.text1}
          onChangeText={(val) => setState1(val)}
        />
        <TextInput
          style={styles.text1}
          onChangeText={(val) => setState1(val)}
        />
      </View>
      <View style={styles.btn}>
        <Button title="nice" onPress={sub} />
      </View>
     
        {people.map((a) => {
          return (
            <View key={a.key}>
              <Text style={styles.maper}>{a.name}</Text>
            </View>
          );
        })}
     </ScrollView> */}
    </View>
  );
};

export default App;
