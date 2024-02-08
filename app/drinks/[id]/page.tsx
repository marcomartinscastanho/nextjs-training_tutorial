import { Drink } from '@/types/drink';
import Link from 'next/link';
import React, { FC } from 'react';
import drinkImg from './drink.webp';
import Image from 'next/image';

interface Props {
  params: {
    id: string;
  };
}

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

console.log(drinkImg);

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
      {/* <Image src={drinkImg} className="w-48 rounded-lg" alt="drink" /> */}
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
