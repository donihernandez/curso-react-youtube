import { useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';

function App() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Mary Doe',
      age: '30',
      avatar: '/images/avatar 01.jpeg'
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: '25',
      avatar: '/images/avatar 02.jpeg'
    },
    {
      id: 3,
      name: 'Jack Doe',
      age: '20',
      avatar: '/images/avatar 03.jpeg'
    },
    {
      id: 4,
      name: 'Jill Doe',
      age: '35',
      avatar: '/images/avatar 04.jpeg'
    }
  ]);

  const handleClearList = () => {
    setUsers([]);
  }

  return (
    <div className="wrapper">
      <Card users={users} clearList={handleClearList} />
    </div>
  );
}

export default App;
