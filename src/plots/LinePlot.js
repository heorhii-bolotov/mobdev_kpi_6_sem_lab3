import {View, Text, StyleSheet, Dimensions} from "react-native";
import React, { Component } from "react";

import { LineChart } from 'react-native-chart-kit';

export default class LinePlot extends React.Component {
    // Функція y = e^x на проміжку x ∈ [-6; 6];

    *generateFloats(start, end, step) {
        for (let i = start; i <= end; i += step) yield i
    }

    expFunc(x) {
        return Array.isArray(x) ? x.map(x => Math.exp(x)) : Math.exp(x)
    }

    constructor() {
        super()

        const x = [...this.generateFloats(-6, 6, 0.5)]
        const labels = x.map((v, i) => v)
        const data = this.expFunc(x)

        this.state = {
            labels: labels,
            data: data,
        }
    }

    render() {
        const { labels, data } = this.state
        return (
            <View style={styles.container}>
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 25}}>Line Chart Sample</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <LineChart
                        data={{
                            labels: labels,
                            datasets: [
                                {
                                    data: data,
                                },
                            ],
                        }}
                        width={Dimensions.get('window').width - 50} // from react-native
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
                        bezier
                        style={{
                            marginVertical: 5,
                            borderRadius: 15,
                        }}
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
