import React from "react";
import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from "react-native"
import MovieExports from "./MovieExports"
import {TouchableWithoutFeedback} from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width

class Movie {
    constructor({ Title, Year, imdbID, Type, Poster }) {
        this.Title = Title
        this.Year = Year
        this.imdbID = imdbID
        this.Type = Type
        this.Poster = Poster
    }
    findMovieImage = () => {
        if (this.Poster && MovieExports[this.Poster.split(".jpg")[0]]) {
            return MovieExports[this.Poster.split(".jpg")[0]]
        } else {
            return false
        }
    }
    renderFullBook = (windowWidth) => {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 10,
                borderBottomColor: "lightgrey",
                borderBottomWidth: 1,
                width: windowWidth,
            },
            images: {
                flex: 1,
                backgroundColor: "white",
                width: windowWidth - 80,
                padding: 10,
                // resizeMode: 'contain'
            },
        })
        return (
            <View style={styles.container}>
                {this.findMovieImage() ? (
                    <Image
                        source={this.findMovieImage()}
                        style={styles.images}
                        width="40"
                    />
                ) : (
                    <View style={styles.images}></View>
                )}
                <View>
                    <Text>{this.Title}</Text>
                    <Text>{this.Year}</Text>
                    <Text>{this.imdbID}</Text>
                    <Text>{this.Type}</Text>
                </View>
            </View>
        )
    }
    renderMoviePreview = (windowWidth, handleClickedBook, RightAction) => {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-start",
                padding: 10,
                borderBottomColor: "lightgrey",
                borderBottomWidth: 1,
                width: windowWidth,
            },
            col1: {
                paddingRight: 10,
                backgroundColor: "white",
            },
            col2: {
                width: windowWidth - 80,
            },
            images: {
                flex: 1,
                backgroundColor: "white",
                width: 60,
                height: 60,
                padding: 10,
            },
        })

        return (
            <TouchableOpacity
                onPress={() => RightAction(this)}>
                <View style={styles.container}>
                    <View style={styles.col1}>
                        <TouchableWithoutFeedback onPress={() => handleClickedBook(this)}>
                        {this.findMovieImage() ? (
                            <Image
                                source={this.findMovieImage()}
                                style={styles.images}
                                width="40"
                            />
                        ) : (
                            <View style={styles.images}></View>
                        )}
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.col2}>
                        <View>
                            <Text>{this.Title}</Text>
                            <Text>{this.Year}</Text>
                            <Text>{this.imdbID}</Text>
                            <Text>{this.Type}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Movie
