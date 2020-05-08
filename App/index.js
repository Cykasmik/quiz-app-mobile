import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import QuizIndex from "./screens/QuizIndex";
import Remote from "./screens/Remote";
import Quiz from "./screens/Quiz";
import Results from "./screens/Results";
import MainMenu from "./screens/MainMenu";

const MainStack = createStackNavigator({
  MainMenu: {
    screen: MainMenu,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'mediumorchid' },
      headerTitle: "Djibouti As A Service"
    }
  },
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Djibouti As A Service"
    }
  },
  Remote: {
    screen: Remote,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  },
  Results: {
    screen: Results,
    navigationOptions: {
      headerTitle: "Djibouti As A Service"
    }
  }

});

export default createAppContainer(MainStack);
