# REST API Example

## Quick Start

```bash
npm i
npm run dev
```

## Example Queries

```gql
query {
  books {
    isbn
  }
}
```

```gql
query {
  book(isbn: "1234") {
    title
  }
}
```

## Example Mutations

```gql
mutation {
  addBook(isbn:"5678", title: "Another Book", author:"Another Author") {
    isbn
    title
    author
  }
}
```
