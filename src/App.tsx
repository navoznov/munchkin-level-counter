// src/App.tsx
import React, { useState } from 'react';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';
import './App.css';

// Определяем тип для объекта игрока
interface PlayerData {
  id: number;
  name: string;
  level: number;
}

function App() {
  // Главное состояние приложения: массив игроков
  const [players, setPlayers] = useState<PlayerData[]>([]);

  // Функция для добавления нового игрока
  const handleAddPlayer = (name: string) => {
    const newPlayer: PlayerData = {
      id: Date.now(), // Используем текущее время как уникальный id
      name: name,
      level: 1, // Новый игрок всегда начинает с 1 уровня
    };
    // Обновляем состояние, добавляя нового игрока в конец массива
    setPlayers([...players, newPlayer]);
  };

  // Функция для увеличения уровня игрока
  const handleIncreaseLevel = (id: number) => {
    setPlayers(players.map(player =>
      player.id === id ? { ...player, level: player.level + 1 } : player
    ));
  };

  // Функция для уменьшения уровня игрока
  const handleDecreaseLevel = (id: number) => {
    setPlayers(players.map(player =>
      // Уровень не может быть меньше 1
      player.id === id && player.level > 1 ? { ...player, level: player.level - 1 } : player
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Munchkin Level Counter</h1>
        <AddPlayerForm onAddPlayer={handleAddPlayer} />
        <div>
          {players.map(player => (
            <Player
              key={player.id}
              player={player}
              onIncreaseLevel={handleIncreaseLevel}
              onDecreaseLevel={handleDecreaseLevel}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;