import React from 'react'
import Book from './Book.js'

function RenderingLists() {
    const books = [
        {
            title: 'to kill a mockingbird',
            author: 'dick',
            pages: 15
        },
        {
            title: 'to kill a mockiasird',
            author: 'dick',
            pages: 152
        },
        {
            title: 'kill a bird',
            author: 'dicfgsd<k',
            pages: 1565
        },
    ]

  return (
    <div>
        {books.map(book => {
            return <Book key={book.title} book={book}/>
        })}
    </div>
  )
}

export default RenderingLists