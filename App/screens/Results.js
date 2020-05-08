import React from "react";
import { View, StyleSheet, BackHandler, Text, SafeAreaView } from "react-native";

import { Button, ButtonContainer } from "../components/Button";
import { Alert } from "../components/Alert";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    alignContent: "center",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  }
});

class Results extends React.Component {


  render() {
    const correctCount = this.props.navigation.getParam('correctCount', '0');
    const totalCount = this.props.navigation.getParam("totalCount", '0');


    return (
      <View
        style={[
          styles.container,
          { backgroundColor: "#f56942" }
        ]}
      >
        <Text style={styles.text}>Your score was: {correctCount} out of {totalCount} </Text>

        <ButtonContainer>

          <Button
            text="Play Again?"
            onPress={() => this.props.navigation.navigate("QuizIndex")}
          />
          <Button
            text="Quit"
            onPress={() => BackHandler.exitApp()}
          />
        </ButtonContainer>
      </View>
    );
  }
}

export default Results;
