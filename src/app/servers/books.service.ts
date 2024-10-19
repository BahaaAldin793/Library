import { Injectable } from '@angular/core';

export interface Book {
  bookId: number;
  bookName: string;
  bookAuthor: string;
  numOfPages: number;
  publisher: string;
  publishDate: Date;
  language: string;
  categories: string[];
  coverImageUrl: string; // Added this to the service's Book interface
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booklist: Book[];

  constructor() { 
    this.booklist = [
      {
        bookId: 1,
        bookName: "To Kill a Mockingbird",
        bookAuthor: "Harper Lee",
        numOfPages: 281,
        publisher: "J.B. Lippincott & Co.",
        publishDate: new Date("1960-07-11"),
        language: "English",
        categories: ["Philosophical fiction", "Classic", "Historical"],
        coverImageUrl: "https://example.com/to-kill-a-mockingbird.jpg"
      },
      {
        bookId: 2,
        bookName: "1984",
        bookAuthor: "George Orwell",
        numOfPages: 328,
        publisher: "Secker & Warburg",
        publishDate: new Date("1949-06-08"),
        language: "English",
        categories: ["Fiction", "Dystopian", "Political"],
        coverImageUrl: "https://example.com/1984.jpg"
      },
      {
        bookId: 3,
        bookName: "The Great Gatsby",
        bookAuthor: "F. Scott Fitzgerald",
        numOfPages: 180,
        publisher: "Charles Scribner's Sons",
        publishDate: new Date("1925-04-10"),
        language: "English",
        categories: ["Fiction", "Classic", "Tragedy"],
        coverImageUrl: "https://example.com/the-great-gatsby.jpg"
      },
      {
        bookId: 4,
        bookName: "One Hundred Years of Solitude",
        bookAuthor: "Gabriel García Márquez",
        numOfPages: 417,
        publisher: "Harper & Row",
        publishDate: new Date("1967-06-05"),
        language: "Spanish",
        categories: ["Fiction", "Magical Realism", "Classic"],
        coverImageUrl: "https://example.com/one-hundred-years.jpg"
      },
      {
        bookId: 5,
        bookName: "The Catcher in the Rye",
        bookAuthor: "J.D. Salinger",
        numOfPages: 277,
        publisher: "Little, Brown and Company",
        publishDate: new Date("1951-07-16"),
        language: "English",
        categories: ["Fiction", "Classic", "Coming-of-Age"],
        coverImageUrl: "https://example.com/the-catcher-in-the-rye.jpg"
      },
      {
        bookId: 6,
        bookName: "Moby-Dick",
        bookAuthor: "Herman Melville",
        numOfPages: 585,
        publisher: "Harper & Brothers",
        publishDate: new Date("1851-10-18"),
        language: "English",
        categories: ["Fiction", "Adventure", "Classic"],
        coverImageUrl: "https://example.com/moby-dick.jpg"
      },
      {
        bookId: 7,
        bookName: "The Hobbit",
        bookAuthor: "J.R.R. Tolkien",
        numOfPages: 310,
        publisher: "George Allen & Unwin",
        publishDate: new Date("1937-09-21"),
        language: "English",
        categories: ["Fiction", "Fantasy", "Adventure"],
        coverImageUrl: "https://example.com/the-hobbit.jpg"
      },
      {
        bookId: 8,
        bookName: "Pride and Prejudice",
        bookAuthor: "Jane Austen",
        numOfPages: 279,
        publisher: "T. Egerton",
        publishDate: new Date("1813-01-28"),
        language: "English",
        categories: ["Fiction", "Classic", "Romance"],
        coverImageUrl: "https://example.com/pride-and-prejudice.jpg"
      },
      {
        bookId: 9,
        bookName: "War and Peace",
        bookAuthor: "Leo Tolstoy",
        numOfPages: 1225,
        publisher: "The Russian Messenger",
        publishDate: new Date("1869-01-01"),
        language: "Russian",
        categories: ["Fiction", "Historical", "Classic"],
        coverImageUrl: "https://example.com/war-and-peace.jpg"
      },
      {
        bookId: 10,
        bookName: "The Brothers Karamazov",
        bookAuthor: "Fyodor Dostoevsky",
        numOfPages: 796,
        publisher: "The Russian Messenger",
        publishDate: new Date("1880-11-01"),
        language: "Russian",
        categories: ["Fiction", "Philosophical", "Classic"],
        coverImageUrl: "https://example.com/the-brothers-karamazov.jpg"
      }
    ];
  }      
}
