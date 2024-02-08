import React, { FC } from 'react';

interface Props {
  params: { 'sign-in': string };
}

const SignInPage: FC<Props> = ({ params }) => {
  console.log(params);

  return <h1 className="text-7xl">SignInPage</h1>;
};

export default SignInPage;
