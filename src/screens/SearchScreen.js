import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import React, { useEffect, useState } from "react"
import { SearchBar } from 'react-native-elements'
import { Button } from 'react-native-elements'
import { ActivityIndicator } from 'react-native'

const { width } = Dimensions.get('window')
import Book from "../models/Book"


export default function SearchScreen() {
  const [books, setBooks] = useState([])
  const [bookDisplay, setBookDisplay] = useState(null)
  const [onAdd, setOnAdd] = useState(null)
  const [formTitle, setFormTitle] = useState('')
  const [formSubtitle, setFormSubtitle] = useState('')
  const [formPrice, setFormPrice] = useState('')
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(_ => {
    const getBooks = async () => {
      setLoading(true)
      try {
        // get books
        const response = await fetch(`https://api.itbook.store/1.0/search/${filter}`)
        const { books } = await response.json()
        setBooks(books)
        console.log(books)
      } catch (err) {
        console.log(err.message)
      } finally {
        setLoading(false)
      }
    }
    console.log(filter)
    // get books only when search length greater than 3
    if (filter.length >= 3) {
      getBooks()
    } else {
      setBooks([])
    }
  }, [filter])

  const handleClickedBook = book => {
    setBookDisplay(book)
  }

  const handleClickBack = book => {
    setBookDisplay(null)
    setOnAdd(false)
  }

  const handleClickAddForm = () => {
    const newBook = {
      title: formTitle,
      subtitle: formSubtitle,
      price: formPrice
    }
    setBooks((prev) => [...prev, newBook])
    setFormTitle('')
    setFormPrice('')
    setFilter('')
    setOnAdd(false)
  }

  const handleClickAdd = () => {
    setOnAdd(true)
  }

  const RightAction = (book) => {
    setBooks((prev) =>
        prev.filter(b => book.title !== b.title))
  }

  const onPriceChanged = formPrice => {
    if (/^\d*$/.test(formPrice.toString())) {
      setFormPrice(formPrice)
    }
  }

  return (
      <View style={styles.container}>
        {
          bookDisplay !== null ?
              <View>
                <Button
                    onPress={handleClickBack}
                    title="Back" color="#A6A6A6"
                />
                { bookDisplay.renderFullBook(width) }
              </View>
              :
              onAdd ?
                  <View>
                    <Text style={styles.inputext}>Add New Book</Text>
                    <TextInput
                        value={formTitle}
                        onChangeText={formTitle => setFormTitle(formTitle)}
                        placeholder='Title'
                        style={styles.input}
                    />
                    <TextInput
                        value={formSubtitle}
                        onChangeText={formSubtitle => setFormSubtitle(formSubtitle)}
                        placeholder='Subtitle'
                        style={styles.input}
                    />
                    <TextInput
                        value={formPrice}
                        onChangeText={formPrice => onPriceChanged(formPrice)}
                        placeholder='Price'
                        style={styles.input}
                    />
                    <Button
                        onPress={handleClickAddForm}
                        title="Add"
                        type='clear'
                    />
                    <Button
                        onPress={handleClickBack}
                        title="Back"
                        type='clear'
                    />
                  </View>
                  :
                  <View>
                    <View style={{ flexDirection: "row", paddingHorizontal: 30, margin: 5, alignItems: "center"}}>
                      {loading && <ActivityIndicator  size="large" color="#0000ff" />}

                      <SearchBar placeholder='Search Book'
                                 searchIcon={{ size: 24 }}
                                 onChangeText={text => setFilter(text)}
                                 onClear={_ => setFilter('')}
                                 value={filter}
                                 inputStyle={{margin: 0}}
                                 containerStyle={{borderWidth: 0, borderRadius: 15, width: 200}}
                                 lightTheme
                                 round
                                 platform="android"
                      />
                      <Button
                          onPress={handleClickAdd}
                          title="Add"
                          type='clear'
                      />
                    </View>
                    <ScrollView>
                      {
                        books.length > 0 && books
                            .filter(b =>
                                filter.length === 0 ||
                                b.title.toLowerCase().includes(filter.toLowerCase()))
                            .map((b) => {
                              return new Book(b)
                                  .renderBookPreview(width, handleClickedBook, RightAction)
                            })
                      }
                    </ScrollView>
                  </View>
        }
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
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
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
