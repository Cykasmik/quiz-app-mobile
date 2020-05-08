import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Button, ButtonContainer } from "../components/Button";
import { Alert } from "../components/Alert";

// For testing purposes only
import question from '../data/test.json';
import Quiz from './Quiz';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#36B1F0",
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

export default class RemoteQuiz extends Quiz {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
            correctCount: 0,
            totalCount: Object.keys(question).length,
            activeQuestionIndex: 0,
            answered: false,
            answerCorrect: false
        };
    }

    componentDidMount() {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json.movies });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    render() {
        console.log(Object.keys(question).length);
        const { data, isLoading } = this.state;

        return (
            <View style={[
                styles.container,
                { backgroundColor: this.props.navigation.getParam("color") }
            ]}>
                <SafeAreaView style={styles.safearea}>
                    {isLoading ? <ActivityIndicator /> : (
                        <View>
                            <Text style={styles.text}>{question.question.text}</Text>

                            <ButtonContainer>
                                {question.question.response.map(answer => (
                                    <Button
                                        key={answer.id}
                                        text={answer.answer}
                                        onPress={() => this.answer(answer.correct)}
                                    />
                                ))}
                            </ButtonContainer>
                        </View>


                    )}
                </SafeAreaView>
                <Text style={styles.text}>
                    {`${this.state.correctCount}/${this.state.totalCount}`}
                </Text>

                <Alert
                    correct={this.state.answerCorrect}
                    visible={this.state.answered}
                />
            </View>
        );
    }
};
