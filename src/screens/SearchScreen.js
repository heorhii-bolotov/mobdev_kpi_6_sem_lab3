import { View, Text, StyleSheet, Dimensions, Button, TextInput } from "react-native"
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler"
import React, { Component } from "react"
import { MenuButton, Logo } from "../components/header/header"

const { width } = Dimensions.get('window')
import Movie from "../models/Movie";


export default class SearchScreen extends React.Component {
  state = {
    bookDisplay: null,
    onAdd: false,
    filter: '',
    formTitle: '',
    formType: '',
    formYear: '',
    books: [
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

  handleClickedBook = book => {
    this.setState({ bookDisplay: book })
  }

  handleClickBack = book => {
    this.setState({ bookDisplay: null })
    this.setState({ onAdd: false })
  }

  handleClickAddForm = () => {
    const newBook = {
      Title: this.state.formTitle,
      Type: this.state.formType,
      Year: this.state.formYear
    }
    const books = this.state.books.concat([newBook])

    this.setState({ books, formTitle: '', formType: '', formYear: '' })
    this.setState({ onAdd: false })
  }

  handleClickAdd = () => {
    this.setState({ onAdd: true })
  }

  RightAction = (book) => {
    // console.log(book)
    this.setState({ books: this.state.books
          .filter(b => book.Title !== b.Title) })
  }

  onPriceChanged(formYear) {
    if (/^\d*$/.test(formYear.toString())) {
      this.setState({ formYear })
    }
  }

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
        {
          this.state.bookDisplay !== null ?
              <View>
                <Button
                    onPress={this.handleClickBack}
                    title="Back" color="#A6A6A6"
                />
                { this.state.bookDisplay.renderFullBook(width) }
              </View>
              :
              this.state.onAdd ?
                  <View>
                    <Text style={styles.inputext}>Add New Book</Text>
                    <TextInput
                        value={this.state.formTitle}
                        onChangeText={formTitle => this.setState({ formTitle })}
                        placeholder='Title'
                        style={styles.input}
                    />
                    <TextInput
                        value={this.state.formType}
                        onChangeText={formType => this.setState({ formType })}
                        placeholder='Type'
                        style={styles.input}
                    />
                    <TextInput
                        value={this.state.formYear}
                        onChangeText={formYear => this.onPriceChanged(formYear)}
                        placeholder='Year'
                        style={styles.input}
                    />
                    <Button
                        onPress={this.handleClickAddForm}
                        title="Add"
                        color="#A6A6A6"
                        style={styles.inputbtn}
                    />
                    <Button
                        onPress={this.handleClickBack}
                        title="Back"
                        color="#A6A6A6"
                        style={styles.inputbtn}
                    />
                  </View>
                  :
                  <View>
                    <View style={{ flexDirection: "row", paddingHorizontal: 30 }}>
                      <TextInput
                          onChangeText={text => this.setState({ filter: text })}
                          placeholder='Search'
                          defaultValue={this.state.filter}
                          inlineImageLeft='search_icon'
                          style={{ flex: 1, color: '#A6A6A6', height: 40 }}/>
                      <Button
                          onPress={this.handleClickAdd}
                          title="Add"
                          color="#A6A6A6" />
                    </View>

                    <ScrollView>
                      {
                        this.state.books
                            .filter(b =>
                                this.state.filter.length === 0 ||
                                b.Title.toLowerCase().includes(this.state.filter.toLowerCase()))
                            .map((b) => {
                              return new Movie(b)
                                  .renderMoviePreview(width, this.handleClickedBook, this.RightAction)
                        })
                      }
                    </ScrollView>
                  </View>
        }
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
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputbtn: {
    width: 200,
    height: 44,
    padding: 20,
    textAlign:'center',
    fontWeight:'bold',
    marginBottom: 20,
  },
})
