import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_app1/services/book.dart';
import 'package:flutter_app1/services/present_book.dart';

import 'models/api.dart';

class BookList extends StatefulWidget {
  final BookService bookService = PresentBookService();

  BookList({Key key}) : super(key: key);

  @override
  _BookListState createState() => _BookListState();
}

class _BookListState extends State<BookList> {
  Future<Widget> _getImage(String path) async {
    if (path == null) {
      return SizedBox.shrink();
    }

    try {
      await rootBundle.load(path);
      return Image.asset(
          path,
          fit: BoxFit.fitWidth,
      );
    } catch (_) {
      return SizedBox.shrink();
    }
  }

  Future<Widget> buildItem(Book book) async {
    Widget image;
    if (book.image != "") {
      image = await _getImage('assets/images/${book.image}');
    } else {
      image = await _getImage(null); // return default image
    }
    return ListTile(
      isThreeLine: true,
      title: Text(book.title),
      subtitle: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(book.subtitle),
          Padding(
            padding: const EdgeInsets.only(top: 15),
            child: Text(book.price),
          ),
        ],
      ),
      leading: Container(
        height: double.infinity,
        child: image,
        width: 140,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: FutureBuilder<List<Widget>>(
        future: Future(() async {
          List<Book> books = await widget.bookService.getBooks();
          List<Widget> bookWidgets = [];
          for (Book book in books) {
            bookWidgets.add(await buildItem(book));
          }
          return bookWidgets;
        }),
        builder: (BuildContext context, AsyncSnapshot<List<Widget>> snapshot) {
          if (!snapshot.hasData) {
            return Center(child: CircularProgressIndicator());
          }

          List<Widget> books = snapshot.data;
          return ListView.separated(
            itemCount: books.length,
            separatorBuilder: (BuildContext context, int index) => Divider(),
            itemBuilder: (BuildContext context, int index) {
              if (!snapshot.hasData) {
                return Center(child: CircularProgressIndicator());
              }
              return books[index];
            },
          );
        },
      ),
    );
  }
}