import { View, StyleSheet, Dimensions } from "react-native"
import React, {useEffect, useState} from "react"
import { ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ImageComponent } from "../components/images/Img"
import ImageStorage from "../coredata/ImageStorage"

const second = Dimensions.get('window').width / 5
const first = (Dimensions.get('window').width / 5) * 3

export default function ImagesScreen() {
    const [images, setImages] = useState({left: [], center: [], right: [], column: 'right'})
    const [loading, setLoading] = useState(false)

    const fetchImages = _ => {
        const getImages = async () => {
            setLoading(true)
            try {
                // get books
                const REQUEST = 'red+cars',
                    COUNT = 21,
                    API_KEY = '19193969-87191e5db266905fe8936d565'
                let hits

                hits = await ImageStorage.getData('Images')
                console.log(hits)
                if (hits === null) {
                    const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${REQUEST}&image_type=photo&per_page=${COUNT}`)
                    const { hits } = await response.json()
                    await ImageStorage.storeData('Images', hits)
                }
                hits.map(image => {
                    console.log(image)
                    image = {localUri: image.userImageURL}
                    setImages((prevImg) => {
                        if (prevImg.column === 'right') {
                            return {...prevImg, column: 'left', left: [...prevImg.left, image]}
                        } else if ((prevImg.column === 'left' && (prevImg.left.length + prevImg.center.length + prevImg.right.length + 1) % 7 !== 2) || prevImg.column === 'center') {
                            return {...prevImg, column: 'right', right: [...prevImg.right, image]}
                        }
                        return {...prevImg, column: 'center', center: [...prevImg.center, image]}
                    })
                })
            } catch (err) {
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        }
        getImages()
    }

    useEffect(fetchImages,[])

    return (
        <View contentContainerStyle={styles.container}>
            {loading && <ActivityIndicator  size="large" color="#0000ff" />}
            <ScrollView>
                <View style={styles.images}>
                    <View>
                        {images.left.map((img, idx) => <ImageComponent image={img} key={idx} size={second} />)}
                    </View>
                    <View>
                        {images.center.map((img, idx) => <ImageComponent image={img} key={idx} size={first} />)}
                    </View>
                    <View>
                        {images.right.map((img, idx) => <ImageComponent image={img} key={idx} size={second} />)}
                    </View>
                </View>
            </ScrollView>
        </View>
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
