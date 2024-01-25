import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import PlayerDetails from './components/PlayerDetails';
import NewPlayerForm from './components/NewPlayerForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/player/:id" element={<PlayerDetails />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
