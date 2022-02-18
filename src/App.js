import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch } from 'react-redux';

const App = () => 
{

  const dispatch = useDispatch();

  useEffect(() => {
    

  }, [])

  return (
    <div>
      
    </div>
  );
}

export default App;
