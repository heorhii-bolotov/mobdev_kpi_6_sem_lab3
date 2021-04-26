import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

const BookCard = props => {
    return (
        <View>
            <h2>{props.title}</h2>
            <Image
                onError={({ nativeEvent: {error} }) => console.warn(error)}
                source={props.image}
                alt={props.subtitle}
                style={{
                    width: 220,
                    height: 320,
                }}
            />
        </View>
    )
}

export default BookCard;
