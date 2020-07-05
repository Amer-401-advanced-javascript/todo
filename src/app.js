import React from 'react';

// import ToDo from './components/todo/todo.js';
import Routes from './components/router';
import Header from './components/header/header';
import Footer from './components/footer/footer';

export default function App() {
    return (
      <>
      <Header />
      <Routes />
      <Footer />
      </>
    );
}
