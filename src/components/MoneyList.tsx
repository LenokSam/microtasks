import React, {useState} from 'react';
import Button from './Button';

type BanknotsType = {
  banknots: string
  value: number
  number: string
}
type MoneyListType = {
  moneys: Array<BanknotsType>
  handlerOnClick:(type: FilterType)=>void
}
type FilterType='ALL'| 'DOLLARS' |'RUBLS'


const MoneyList = (props: MoneyListType) => {
  const {moneys, handlerOnClick} = props

  const setBanknotType = (type: FilterType) => {
    handlerOnClick(type)
  }

  return (
    <>
      <ul>
        {
          moneys.map((banknots) => {
            return (
              <li key={banknots.number}>
                <span>{banknots.banknots}</span>
                <span>{banknots.value}</span>
              </li>
            )
          })
        }
      </ul>

      <button onClick={() => {
        setBanknotType('DOLLARS')
      }}>DOLLARS
      </button>
      <button onClick={() => {
        setBanknotType('RUBLS')
      }}>RUBLS
      </button>
      <button onClick={() => {
        setBanknotType('ALL')
      }}>SHOW ALL
      </button>
    </>
  );
};

export default MoneyList;