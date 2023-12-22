import React from 'react';
import logo from './logo.svg';
import './App.css';

// import SwitchComponent from './components/SwitchComponent/SwitchComponent';
// import ListView from './components/ListView/ListView';
// import CusButton from './components/CusButton/CusButton';
import CoupleButtons from './components/CoupleButtons/CoupleButtons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ListView></ListView>
        <CusButton></CusButton> */}
        <CoupleButtons></CoupleButtons>
      </header>
    </div>
  );
}

export default App;
