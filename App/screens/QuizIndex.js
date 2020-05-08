import React from "react";
import { ScrollView, StatusBar } from "react-native";
import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  < ScrollView >
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Random - remote"
      color="mediumorchid"
      onPress={() =>
        navigation.navigate("Remote", {
          title: "Random - remote",
          questions: spaceQuestions,
          color: "mediumorchid"
        })
      }
    />
    <RowItem
      name="Space - local"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Space",
          questions: spaceQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Westerns  - local"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Westerns",
          questions: westernsQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Computers - local"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: computerQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView >
);
