import { View, Text, StyleSheet, Dimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import React, { Component } from "react"
import { MenuButton, Logo } from "../components/header/header"
const list = {
  books: [
    {
      title: 'Long title that want to break your layout. Long title that want to break your layout. Long title that want to break your layout. Long title that want to break your layout',
      subtitle: '',
      isbn13: 'noid',
      price: 'Priceless',
      image: '',
      uri: ''
    },
    {
      title: 'iOS Components and Frameworks',
      subtitle: 'Understanding the Advanced Features of the iOS SDK',
      isbn13: '9780321856715',
      price: '$23.30',
      image: 'Image_01.png',
      uri: 'https://drive.google.com/uc?export=download&id=1LFrwYL7hFvuSoWJSJahcGxO9DBNrRlqo'
    },
    {
      title: 'Learning iOS Development',
      subtitle: 'A Hands-on Guide to the Fundamentals of iOS Programming',
      isbn13: '9780321862969',
      price: '$3.99',
      image: 'Image_02.png',
      uri: 'https://drive.google.com/uc?export=download&id=1ePyPpLYvNsAeQASlcuUeMMqRODlDbu4L'
    },
    {
      title: 'Beginning iOS Programming',
      subtitle: 'Building and Deploying iOS Applications',
      isbn13: '9781118841471',
      price: '$6.35',
      image: 'Image_03.png',
      uri: 'https://drive.google.com/uc?export=download&id=16i-9TVnF73ovco-phKxBqCtfbtArUckg'
    },
    {
      title: 'Beginning iOS 5 Development',
      subtitle: 'Exploring the iOS SDK',
      isbn13: '9781430236054',
      price: '$3.65',
      image: '',
      uri: ''
    },
    {
      title: 'Beginning iOS 5 Games Development',
      subtitle: 'Using the iOS SDK for iPad, iPhone and iPod touch',
      isbn13: '9781430237105',
      price: '$36.31',
      image: 'Image_05.png',
      uri: 'https://drive.google.com/uc?export=download&id=1WZ2egkXHNhhYIl7D2zuaZS1VwGrOV2xZ'
    },
    {
      title: 'More iOS 6 Development',
      subtitle: 'Further Explorations of the iOS SDK',
      isbn13: '9781430238072',
      price: '$4.95',
      image: 'Image_06.png',
      uri: 'https://drive.google.com/uc?export=download&id=1U4B4USGcGDmPWJ0A3olQy7xtFRiYNeGx'
    },
    {
      title: 'Beginning iOS 6 Development',
      subtitle: 'Exploring the iOS SDK',
      isbn13: '9781430245124',
      price: '$5.34',
      image: 'Image_07.png',
      uri: 'https://drive.google.com/uc?export=download&id=1AutN6Pr-7e6bQ57PBhbO5Sr16H14mJCB'
    },
    {
      title: 'Beginning iOS 7 Development',
      subtitle: 'Exploring the iOS SDK',
      isbn13: '9781430260226',
      price: '$3.65',
      image: 'Image_08.png',
      uri: 'https://drive.google.com/uc?export=download&id=1xPeKO5xfRo2_LcYk3gmJzwoFbFUYCv2h'
    },
    {
      title: 'Developing iOS Applications with Flex 4.5',
      subtitle: '',
      isbn13: '9781449308360',
      price: '$12.99',
      image: '',
      uri: ''
    },
    {
      title: 'iOS 6 Programming Cookbook',
      subtitle: 'Solutions for iOS Developers',
      isbn13: '9781449342753',
      price: '$4.45',
      image: 'Image_10.png',
      uri: 'https://drive.google.com/uc?export=download&id=1yCQd_pUjXDFh6gpxN6SD9eE1k39gUeVI'
    }
  ]
}
const { width } = Dimensions.get('window')
import Book from "../models/Book";


export default class SearchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: "Search",
      headerLayoutPreset: "center"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Authors list</Text>
        <ScrollView>
          {
            list['books'].map((b) => {
              return new Book(b).renderBookPreview(Dimensions.get("window").width)
            })
          }
        </ScrollView>
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
