import React from 'react';


type CarsTable={
  cars: Array<CarType>
}

type CarType={
  manufacturer:string
  model: string
}

const CarsTable = (props:CarsTable) => {
  const {cars} = props
  return (
    <div>
      <table>
        <tr>
          <th> manufacturer</th>
          <th> modele</th>
        </tr>

        {
          cars.map( (car:CarType, i:number ) => {
            return(
              <tr key={i}>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
              </tr>
            )
            }

          )
        }
      </table>
    </div>
  );
};

export default CarsTable;