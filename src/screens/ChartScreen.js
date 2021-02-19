import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";
import LinePlot from "../plots/LinePlot";
import { HeaderBackButton } from "react-navigation";

export default class ChartScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
            headerTitle: <Logo />,
            headerBackTitle: "Charts",
            headerLayoutPreset: "center"
        };
    };
    render() {
        return (
            <View style={styles.container}>
                <LinePlot />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    }
});
