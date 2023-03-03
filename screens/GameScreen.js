import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen(props) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    props.userNumber
  );
  const [currrentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    
  }, [])

  function nextGuessHandler(direction) {
    if (
      (direction == "lower" && currrentGuess < props.userNumber) ||
      (direction == "greater" && currrentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      const newRndNumber = generateRandomBetween(
        minBoundary,
        currrentGuess,
        currrentGuess
      );
    } else {
      const newRndNumber = generateRandomBetween(
        currrentGuess + 1,
        maxBoundary,
        currrentGuess
      );
    }
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currrentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower ?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lesser")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
