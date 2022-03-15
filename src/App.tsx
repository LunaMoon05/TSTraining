import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { UsersPage } from './components/UsersPage';
import { TodosPage } from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import { EventsExample } from './components/EventsExample';

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
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/events' element={<EventsExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
