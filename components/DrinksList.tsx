import Link from 'next/link';
import React, { FC } from 'react';

type Drink = {
  idDrink: string;
  strDrink: string;
};

interface Props {
  drinks: Drink[];
}

const DrinksList: FC<Props> = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link href={`/drinks/${drink.idDrink}`} className="text-xl font-medium">
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinksList;
