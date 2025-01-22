import React from 'react';
import Navigation from './components/navigation';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArsipPage from './pages/ArsipPage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/arsip" element={<ArsipPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/add-note" element={<AddPage />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;