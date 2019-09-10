import React from 'react';
import Header from './components/header/Header'
import MainTodo from './components/todoList/MainTodo'
import KeyWordList from './components/webscraping/KeyWordList'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <KeyWordList />
      </div>
    </div>
  );
}

export default App;
