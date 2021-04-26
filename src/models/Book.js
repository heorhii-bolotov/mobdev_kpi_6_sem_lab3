import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import BookExports from "./BookExports";

const windowWidth = Dimensions.get("window").width;

class Book {
    constructor({ title, subtitle, isbn13, price, image, uri }) {
        this.title = title;
        this.subtitle = subtitle;
        this.isbn13 = isbn13;
        this.price = price;
        this.image = image;
        this.uri = uri;
    }
    findBookImage = () => {
        if (this.image && BookExports[this.image.split(".png")[0]]) {
            return BookExports[this.image.split(".png")[0]]
        } else {
            return false
        }
    }
    renderBookPreview = windowWidth => {
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
            <View style={styles.container}>
                <View style={styles.col1}>
                    {this.findBookImage() ? (
                        <Image
                            source={this.findBookImage()}
                            style={styles.images}
                            width="40"
                        />
                    ) : (
                        <View style={styles.images}></View>
                    )}
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
        )
    }
}

export default Book
