import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Main } from './pages/main';
import { Layout } from './layout';
import { Error } from './pages/error';
import { UserProfile } from './pages/userProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate replace to='/404' />} />
      </Route>
    </Routes >
  );
}

export default App;
