export default {
    setNewBook(state, newBook){
        state.books.push(newBook)
    },
    initState(state, newBooks){
        state.books = newBooks;
    },
    setAllBooks(state, allBooks){
        state.books = allBooks;
    }
}