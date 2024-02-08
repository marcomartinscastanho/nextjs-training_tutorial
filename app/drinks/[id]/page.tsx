import { Drink } from '@/types/drink';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
  params: {
    id: string;
  };
}

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id: string): Promise<{ drinks: Drink[] }> => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch a drink...');
  }
  return res.json();
};

const SingleDrinkPage: FC<Props> = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  console.log(data);

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        BACK TO DRINKS
      </Link>
      <h1 className="tsxt-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
