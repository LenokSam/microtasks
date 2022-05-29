import React, {useState} from 'react';
import './App.css';
import MoneyList from './components/MoneyList';
// task1
const topCars = [
  {manufacturer: 'BMW', model: 'm5cs'},
  {manufacturer: 'Mercedes', model: 'e63s'},
  {manufacturer: 'Audi', model: 'rs6'}
]
// task 2
type BanknotsType = {
  banknots: string
  value: number
  number: string
}
type MoneyListType = {
  moneys: Array<BanknotsType>
}


function App() {

  const [money, setMoney] = useState([
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
  ])




  return (
    <div className="App">

      <MoneyList moneys={money}></MoneyList>
    </div>
  );
}

export default App;


