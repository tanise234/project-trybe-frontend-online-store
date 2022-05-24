import React from 'react';
import './App.css';
import Categories from './Components/Categories';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <main>
        <Home />
      </main>
      <nav>
        <Categories />
      </nav>
    </div>
  );
}

export default App;
