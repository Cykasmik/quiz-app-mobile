import React from "react";
import { StyleSheet, View, Button, Image, ImageBackground } from "react-native";

import { RowItem } from "../components/RowItem";

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    container: {
        // backgroundColor: "#36B1F0",
        alignContent: "center",
        flex: 1
    },
    text: {
        color: "#fff",
        fontSize: 25,
        textAlign: "center",
        letterSpacing: -0.02,
        fontWeight: "600"
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 500
    },
    safearea: {
        flex: 1,
        marginTop: 100,
        justifyContent: "space-between"
    }
});


class MainMenu extends React.Component {


    render() {


        return (
            <View style={[
                styles.container
            ]}
            >
                <ImageBackground
                    style={styles.backgroundImage}
                    source={{ uri: 'https://media.giphy.com/media/BHNfhgU63qrks/source.gif' }}>

                    <View
                        style={styles.button}>
                        <Button title="Start New Quiz"
                            onPress={() => this.props.navigation.navigate("QuizIndex")} />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default MainMenu;
