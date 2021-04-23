import 'package:flutter_app1/models/api.dart';

abstract class BookService {
  Future<List<Book>> getBooks();
}