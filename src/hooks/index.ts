import { useContext } from "react";
import { WishListContext } from "../provider/wishList";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useOrderResume } from "./useOrderResume";

type DataOrderProps = {
  id: number;
  name: string;
  quantity: number;
  total: number;
  total_price: number;
  price: number;
};
export type OrderProps = {
  dataOrder: DataOrderProps[];
  data: DataOrderProps[];
  setDataOrder: (order: DataOrderProps[]) => void;
};

export const useFood = () => {
  const context = useContext(WishListContext);

  if (context) {
    return context;
  }
  throw new Error("Context is not defined.");
};

// const dates = [
//   {
//     name: "Fevereiro",
//     date: new Date(`${new Date().getFullYear()}-02-01 00:00`),
//   },
// ];

export const useTotalSales = () => {
  const resume = useOrderResume();

  return resume.reduce((acc, { total }) => acc + total, 0);
};
