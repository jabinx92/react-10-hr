import React from 'react';
import ReactDOM from 'react-dom';
import SpecificBook from './Book';
import {greeting} from './testing/testing'

//CSS
import './index.css'

import {data} from './books';

//setup vars

  function BookList() {
    console.log(greeting)

    return (
    <section className='booklist'>
    {data.map((book) => {
      return <SpecificBook key={book.id} {...book}></SpecificBook>
    })}
    </section>
  );
}

ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);


