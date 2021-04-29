import { View, Text, StyleSheet, Dimensions, Button, TextInput } from "react-native"
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler"
import React, { Component } from "react"
import { MenuButton, Logo } from "../components/header/header"

const { width } = Dimensions.get('window')
import Book from "../models/Book";


export default class SearchScreen extends React.Component {
  state = {
    bookDisplay: null,
    onAdd: false,
    filter: '',
    formTitle: '',
    formSubtitle: '',
    formPrice: '',
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

  handleClickedBook = book => {
    this.setState({ bookDisplay: book })
  }

  handleClickBack = book => {
    this.setState({ bookDisplay: null })
    this.setState({ onAdd: false })
  }

  handleClickAddForm = () => {

    const newBook = {
      title: this.state.formTitle,
      subtitle: this.state.formSubtitle,
      price: this.state.formPrice
    }
    const books = this.state.books.concat([newBook])

    this.setState({ books, formTitle: '', formSubtitle: '', formPrice: '' })
    this.setState({ onAdd: false })
  }

  handleClickAdd = () => {
    this.setState({ onAdd: true })
  }

  RightAction = (book) => {
    // console.log(book)
    this.setState({ books: this.state.books
          .filter(b => book.title !== b.title) })
  }

  onPriceChanged(formPrice) {
    if (/^\d*$/.test(formPrice.toString())) {
      this.setState({ formPrice });
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
                        value={this.state.formSubtitle}
                        onChangeText={formSubtitle => this.setState({ formSubtitle })}
                        placeholder='Subtitle'
                        style={styles.input}
                    />
                    <TextInput
                        value={this.state.formPrice}
                        onChangeText={formPrice => this.onPriceChanged(formPrice)}
                        placeholder='Price'
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
                                b.title.toLowerCase().includes(this.state.filter.toLowerCase()))
                            .map((b) => {
                              return new Book(b)
                                  .renderBookPreview(width, this.handleClickedBook, this.RightAction)
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
