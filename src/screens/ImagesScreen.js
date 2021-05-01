import { View, Text, StyleSheet, Alert, Dimensions } from "react-native";
import React, {Component, useState} from "react";
import { MenuButton, Logo } from "../components/header/header";
// import ImagePicker from 'react-native-image-crop-picker'
import * as ImagePicker from 'expo-image-picker';
import { TouchableWithoutFeedback, ScrollView } from 'react-native-gesture-handler'
import { ImageComponent } from "../components/images/Img";
import Icon from 'react-native-vector-icons/FontAwesome'

const second = Dimensions.get('window').width / 5
const first = (Dimensions.get('window').width / 5) * 3

export default function ImagesScreen() {
    const [images, setImages] = useState({left: [], center: [], right: [], column: 'right'})

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        return { localUri: pickerResult.uri }
    };

    const pick = async _ => {
        openImagePickerAsync().then((image) => {
            // set images
            setImages((prev) => {
                if (prev.column === 'right') { return { ...prev, column: 'left', left: [...prev.left, image] }}
                else if (
                    (prev.column === 'left'
                    && (prev.left.length + prev.center.length + prev.right.length + 1) % 7 !== 2)
                    || prev.column === 'center'
                ) { return { ...prev, column: 'right', right: [...prev.right, image] } }
                return { ...prev, column: 'center', center: [...prev.center, image] }
            })
        }).catch(() =>
            Alert.alert('Error', 'Failed to load image',
                [{text: 'Ok'}, ])
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <TouchableWithoutFeedback onPress={pick}>
                    <View style={styles.header}>
                        <Icon name="plus" size={24} color="black" />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.images}>
                    <View>
                        {images.left.map((image, index) =>
                            <ImageComponent image={image} key={index} size={second} />
                        )}
                    </View>
                    <View>
                        {images.center.map((image, index) =>
                            <ImageComponent image={image} key={index} size={first} />
                        )}
                    </View>
                    <View>
                        {images.right.map((image, index) =>
                            <ImageComponent image={image} key={index} size={second} />
                        )}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    header: {
        width: '100%',
        height: 40,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    images: {
        flexDirection: 'row'
    }
});
