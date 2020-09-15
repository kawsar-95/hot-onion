import React from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import Header from './components/Header/Header';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Breakfast></Breakfast>
      <Lunch></Lunch>
      <Dinner></Dinner>
      <ChooseUs></ChooseUs>
      <Footer></Footer>

    </div>
  );
}

export default App;
