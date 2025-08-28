// src/components/AddPlayerForm.tsx
import React, { useState } from 'react';

// Определяем типы для пропсов (props), которые компонент будет получать
interface AddPlayerFormProps {
  onAddPlayer: (name: string) => void; // Функция, которая будет вызываться для добавления игрока
}

const AddPlayerForm: React.FC<AddPlayerFormProps> = ({ onAddPlayer }) => {
  // Состояние для хранения имени нового игрока из поля ввода
  const [name, setName] = useState<string>('');

  // Функция-обработчик для отправки формы
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    if (!name.trim()) return; // Не добавляем игрока, если имя пустое

    onAddPlayer(name); // Вызываем функцию из родительского компонента
    setName(''); // Очищаем поле ввода после добавления
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Имя нового игрока"
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>
        Добавить игрока
      </button>
    </form>
  );
};

export default AddPlayerForm;