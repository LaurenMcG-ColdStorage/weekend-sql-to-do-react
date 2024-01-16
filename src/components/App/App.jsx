import {useState, useEffect } from 'react';
import CollectTodoItem from '../toDoForm/toDoForm';
import BuildTodoList from '../toDoList/toDoList';
import './App.css';


function App () {

  return (
    <div>
      <h1 className='App-header'>TO DO APP</h1>
      <CollectTodoItem CollectTodoItemCallback={BuildTodoList}/>
      <BuildTodoList />
    </div>
  )
};
export default App;
