import React, { useEffect, useState } from "react";


function KonyvAd() {
  const [books, setBooks] = useState([]);

  const loadBooks = () => {
    api.get("/")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const deleteBook = (id) => {
    api.delete(`/konyvek/${id}`)
      .then(() => loadBooks())
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Könyvek</h2>
      {books.map(book => (
        <BookItem key={book.id} book={book} onDelete={deleteBook} />
      ))}
    </div>
  );
}

export default KonyvAd;
