import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ListPlayers from "./listplayers";
import NewPlayerForm from "./NewPlayerForm";
import { players as initialPlayers } from "./players";

const App = () => {
  const [players, setPlayers] = useState(initialPlayers);

  const addPlayer = (newPlayer) => {
    setPlayers([...players, { ...newPlayer, id: players.length + 1 }]);
  };

  return (
    <Routes>
      <Route
        path="/ai-array-app"
        element={<ListPlayers players={players} setPlayers={setPlayers} />}
      />
      <Route
        path="/add-player"
        element={<NewPlayerForm addPlayer={addPlayer} />}
      />
    </Routes>
  );
};

export default App;
