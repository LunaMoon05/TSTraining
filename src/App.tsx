import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { UsersPage } from './components/Users/UsersPage';
import { TodosPage } from './components/Todos/TodosPage';
import { NavLink } from 'react-router-dom';
import { EventsExample } from './components/EventsExample/EventsExample';
import { UserItemPage } from './components/Users/UserItemPage';
import { TodoItemPage } from './components/Todos/TodoItemPage';

function App() {
  return (
    <BrowserRouter>
      <div style={{marginBottom: 30}}>
        <NavLink style={{marginRight: 10, fontSize: 20, fontWeight: 'bold'}} to='/users'>Пользователи</NavLink>
        <NavLink style={{marginRight: 10, fontSize: 20, fontWeight: 'bold'}} to='/todos'>Список дел</NavLink>
        <NavLink style={{marginRight: 10, fontSize: 20, fontWeight: 'bold'}} to='/events'>Events example</NavLink>
      </div>
      <Routes>
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserItemPage />} />
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/todos/:id' element={<TodoItemPage />} />
        <Route path='/events' element={<EventsExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
