import {View, Text, StyleSheet, Dimensions} from "react-native";
import React, { Component } from "react";
import { PieChart } from 'react-native-chart-kit';

export default class Pie extends React.Component {
    // Кільце кругової діаграми із секторами, що займають відповідний відсоток кола та мають відповідний колір: 30% (помаранчевий), 30% (зелений), 40% (чорний).

    constructor() {
        super()
        this.state = {

            data: [
                {
                    name: "Orange",
                    population: 30,
                    color: "#E25B13",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
                {
                    name: "Green",
                    population: 30,
                    color: "#4CAF50",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
                {
                    name: "Black",
                    population: 40,
                    color: "#131312",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
            ]

        }
    }

    render() {
        const { data } = this.state
        return (
            <View style={styles.container}>
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 25}}>Line Chart Sample</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <PieChart
                        data={data}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        chartConfig={{
                            backgroundColor: '#e26a00',
                            backgroundGradientFrom: '#D9D9D9',
                            backgroundGradientTo: '#FFF',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: '6',
                                strokeWidth: '2',
                                stroke: '#ffa726',
                            },
                        }}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"15"}
                        center={[10, 50]}
                        absolute
                    />
                </View>
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
