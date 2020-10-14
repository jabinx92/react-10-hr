import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css'

//setup vars

const books =[
  { 
    id: 1,
    author:'Contessa Confessa',
    title: 'Modern Comfort Food: A Barefoot Contessa Cookbook',
    img: "https://images-na.ssl-images-amazon.com/images/I/81CTXWG01OL._AC_UL200_SR200,200_.jpg"
  },
  {
    id: 2,
    author:'Julia Donaldson',
    title: 'Room on the Broom',
    img: "https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg"
  },
  {
    id: 3,
    author:'Ann Whitford Paul',
    title: 'If Animals Kissed Good Night',
    img: "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg"
  }
]
  

  function BookList() {
    return (
    <section className='booklist'>
    {books.map((book) => {
      return <Book key={book.id} {...book}></Book>
    })}
    </section>
  );
}

const Book = ({img, title, author}) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  // console.log(props)
  // const {img, title, author} = props

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target)
  }
  const complexExample = (author) => {
    console.log(author);
  }
  return (
    <article className='book' onMouseOver={() => {
      console.log(title)
    }}
  >
    <img src={img} alt=""/>
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>reference</button>
    <button type="button" onClick={() => complexExample(author)}>more complex example</button>
  </article>
  )
}

ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);


