import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from "react-native";

function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [CourseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...CourseGoals, enteredGoal]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {CourseGoals.map((goal, index) => (
          <View style={styles.listItem} key={index}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "100%",
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    backgroundColor: "salmon",
    borderColor: "black",
    marginVertical: 10,
    borderWidth: 1
  }
});

export default App;
