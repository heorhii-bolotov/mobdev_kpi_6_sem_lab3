import React, { Component } from "react";
import AutoHeightImage from 'react-native-auto-height-image'
import {View, Image as ImageItem, StyleSheet} from 'react-native'

export const ImageComponent = ({ image, size }) => {
    return (
        <View style={styles.container(size)}>
            {
                image !== null ?
                    image.width >= image.height ? (
                        <AutoHeightImage
                            source={{ uri: image.localUri }}
                            width={size - 2} // -2  - because 2px for borders
                        />
                    ) : (
                        <ImageItem
                            source={{ uri: image.localUri }}
                            style={styles.verticalImage(size)}
                            resizeMode="contain"
                        />
                    ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: size => ({
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        borderColor: 'white'
    }),
    verticalImage: h => ({
        width: '100%',
        height: h - 2,
        maxWidth: h
    })
})
