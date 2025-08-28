// src/components/Player.tsx
import React from 'react';

// Определяем, как выглядит объект игрока
interface PlayerData {
  id: number;
  name: string;
  level: number;
}

// Определяем типы для пропсов компонента
interface PlayerProps {
  player: PlayerData;
  onIncreaseLevel: (id: number) => void;
  onDecreaseLevel: (id: number) => void;
}

const Player: React.FC<PlayerProps> = ({ player, onIncreaseLevel, onDecreaseLevel }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', fontSize: '1.2rem' }}>
      <span style={{ minWidth: '150px' }}>{player.name}</span>
      <span style={{ fontWeight: 'bold', margin: '0 20px' }}>Уровень: {player.level}</span>
      <button onClick={() => onIncreaseLevel(player.id)} style={{ width: '40px', height: '40px', fontSize: '1.5rem' }}>+</button>
      <button onClick={() => onDecreaseLevel(player.id)} style={{ width: '40px', height: '40px', fontSize: '1.5rem', marginLeft: '5px' }}>-</button>
    </div>
  );
};

export default Player;