import React from "react"
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native"
import BookExports from "./BookExports"
import {TouchableWithoutFeedback, Swipeable, ScrollView} from "react-native-gesture-handler"

const { width } = Dimensions.get("window")

class Book {
    constructor({ title, subtitle, isbn13, price, image, uri }) {
        this.title = title
        this.subtitle = subtitle
        this.isbn13 = isbn13
        this.price = price
        this.image = image
        this.uri = uri
    }
    findBookImage = () => {
        if (this.image && BookExports[this.image.split(".png")[0]]) {
            return BookExports[this.image.split(".png")[0]]
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
                    {this.findBookImage() ? (
                        <Image
                            source={this.findBookImage()}
                            style={styles.images}
                            width="40"
                        />
                    ) : (
                        <View style={styles.images}></View>
                    )}
                    <View>
                        <Text>{this.title}</Text>
                        <Text>{this.subtitle}</Text>
                        <Text>{this.isbn13}</Text>
                        <Text>{this.price}</Text>
                    </View>
            </View>
        )
    }

    renderBookPreview = (windowWidth, handleClickedBook, RightAction) => {
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
                // resizeMode: 'contain'
            },
        })

        return (
            <TouchableOpacity
                onPress={() => RightAction(this)}>
                <View style={styles.container}>
                    <View style={styles.col1}>
                        <TouchableWithoutFeedback onPress={() => handleClickedBook(this)}>
                            {this.findBookImage() ? (
                                <Image
                                    source={this.findBookImage()}
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
                            <Text>{this.title}</Text>
                            <Text>{this.subtitle}</Text>
                            <Text>{this.isbn13}</Text>
                            <Text>{this.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Book
