import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TopCarsComponent} from "./TopCars";

const topCars = [
    {id: 1, manufacturer: 'BMW', model: 'm5cs'},
    {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
    {id: 3, manufacturer: 'Audi', model: 'rs6'},
]


function App() {



    return (

      <TopCarsComponent topCars={topCars}/>

  );
}

export default App;
