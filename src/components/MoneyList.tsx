import React, {useState} from 'react';
import Button from './Button';

type BanknotsType = {
  banknots: string
  value: number
  number: string
}
type MoneyListType = {
  moneys: Array<BanknotsType>
}
type FilterType='ALL'| 'DOLLARS' |'RUBLS'

const MoneyList = (props: MoneyListType) => {
  const {moneys} = props

  const [typeMoney, setTypeMoney] = useState<FilterType>('ALL')
  const [moneysForDisplay, setMoneysForDisplay] = useState(moneys)
  const getBanknotsOfType = (type: FilterType) => {
    setTypeMoney(type)
  }
  let currentMoney = moneys
  if (typeMoney !== 'ALL') {
    currentMoney =moneys.filter((filterMoney) => filterMoney.banknots.toLowerCase() == typeMoney.toLowerCase())
  }

  return (
    <>
      <ul>
        {
          currentMoney.map((banknots) => {
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
        getBanknotsOfType('DOLLARS')
      }}>DOLLARS
      </button>
      <button onClick={() => {
        getBanknotsOfType('RUBLS')
      }}>RUBLS
      </button>
      <button onClick={() => {
        getBanknotsOfType('ALL')
      }}>ALL
      </button>
    </>
  );
};

export default MoneyList;