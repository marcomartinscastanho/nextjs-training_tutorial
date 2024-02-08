"use client";
import React, { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default Providers;
