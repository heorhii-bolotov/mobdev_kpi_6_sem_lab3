import { View, Text, StyleSheet, Dimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import React, { Component } from "react"
import { MenuButton, Logo } from "../components/header/header"

const list = {
  Search: [
    {
      "Title": "Long title that want to break your layout. Long title that want to break your layout. Long title that want to break your layout. Long title that want to break your layout",
      "Year": "2020",
      "imdbID": "noid",
      "Type": "test",
      "Poster": ""
    },
    {
      "Title": "Star Wars: Episode IV - A New Hope Star Wars: Episode IV - A New Hope ",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "Poster_01.jpg"
    },
    {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Year": "1980",
      "imdbID": "tt0080684",
      "Type": "movie",
      "Poster": "Poster_02.jpg"
    },
    {
      "Title": "Star Wars: Episode VI - Return of the Jedi",
      "Year": "1983",
      "imdbID": "tt0086190",
      "Type": "movie",
      "Poster": "Poster_03.jpg"
    },
    {
      "Title": "Star Wars: Episode VII - The Force Awakens",
      "Year": "",
      "imdbID": "tt2488496",
      "Type": "movie",
      "Poster": ""
    },
    {
      "Title": "Star Wars: Episode I - The Phantom Menace",
      "Year": "1999",
      "imdbID": "tt0120915",
      "Type": "movie",
      "Poster": "Poster_05.jpg"
    },
    {
      "Title": "Star Wars: Episode III - Revenge of the Sith",
      "Year": "2005",
      "imdbID": "tt0121766",
      "Type": "movie",
      "Poster": "Poster_06.jpg"
    },
    {
      "Title": "Star Wars: Episode II - Attack of the Clones",
      "Year": "2002",
      "imdbID": "tt0121765",
      "Type": "movie",
      "Poster": "Poster_07.jpg"
    },
    {
      "Title": "Star Trek",
      "Year": "2009",
      "imdbID": "tt0796366",
      "Type": "movie",
      "Poster": "Poster_08.jpg"
    },
    {
      "Title": "Star Wars: Episode VIII - The Last Jedi",
      "Year": "2017",
      "imdbID": "tt2527336",
      "Type": "",
      "Poster": ""
    },
    {
      "Title": "Rogue One: A Star Wars Story",
      "Year": "2016",
      "imdbID": "tt3748528",
      "Type": "movie",
      "Poster": "Poster_10.jpg"
    }
  ]
}
const { width } = Dimensions.get('window')
import Movie from "../models/Movie"


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
            list['Search'].map((m) => {
              return new Movie(m).renderMoviePreview(Dimensions.get("window").width)
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
