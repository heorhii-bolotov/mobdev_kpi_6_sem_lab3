import React, { Component } from "react";
import {
    View,
    Image
} from "react-native";

const MovieCard = props => {
    return (
        <View>
            <h2>{props.title}</h2>
            <Image
                onError={({ nativeEvent: {error} }) => console.warn(error)}
                source={props.image}
                alt={props.Title}
                style={{
                    width: 220,
                    height: 320,
                }}
            />
        </View>
    )
}

export default MovieCard;
