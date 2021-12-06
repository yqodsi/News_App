import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function App() {
  const [outputText, setOutputText] = useState("Hello!");
  return (
    <View style={styles.container}>
      <Text> {outputText} </Text>
      <Button
        title="Change text"
        onPress={() => setOutputText("The text changed!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
