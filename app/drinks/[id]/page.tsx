import React, { FC } from 'react';

interface Props {
  params: {
    id: string;
  };
}

const SingleDrinkPage: FC<Props> = ({ params }) => {
  console.log(params.id);

  return <div>SingleDrinkPage</div>;
};

export default SingleDrinkPage;
