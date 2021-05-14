import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("shaun");
  const [person, setPerson] = useState({ name: "mario", age: "27" });
  const [value, setValue] = useState(0);
  const clickHandler = () => {
    setName("Panda");
    setPerson({ name: "Ritesh", age: "25" });
  };
  const increase = () => {
    setValue(value + 1);
  };
  const reset = () => {
    setValue(0);
  };
  const decrease = () => {
    setValue(value - 1);
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name}. His age is {person.age}
      </Text>
      <View>
        <Text>{value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
      <View style={styles.buttonContainer2}>
        <View style={styles.buttons}>
          <Button title="Increase" onPress={increase} />
        </View>
        <View style={styles.buttons}>
          <Button title="Reset" onPress={reset} />
        </View>

        <View style={styles.buttons}>
          <Button title="Decrease" onPress={decrease} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonContainer2: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
  },
  buttons: {
    margin: 5,
  },
});
