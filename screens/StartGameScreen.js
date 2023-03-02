import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredNubmer, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('')
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNubmer);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    console.log('Valid number');
  }

  return (
    <View style={style.inputContainer}>
      <TextInput
        style={style.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNubmer}
        onChangeText={numberInputHandler}
      />
      <View style={style.buttonsContainer}>
        <View style={style.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={style.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const style = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "centre",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#4e0329",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "centre",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
