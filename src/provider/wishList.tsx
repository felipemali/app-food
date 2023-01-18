import React, { createContext, useState } from "react";
import { Order } from "../components/OrderDrawer/SaveButton";
type ProviderProps = {
  children: React.ReactNode;
};

export type Food = {
  name: string;
  price: number;
  quantity: number;
  id: number;
  total_price: number;
  anotation?: string;
};
type CurrentFoodProps = {
  name: string;
  price: number;
  id: number;
};

export type WishListContextProps = {
  order: Food[];
  setOrder: (food: Food[]) => void;
  currentFood: CurrentFoodProps;
  setCurrentFood: (currentFood: CurrentFoodProps) => void;
  toMake: any;
  setToMake: (make: any) => void;
  qntToMake: number;
  setQntToMake: (placed: (placed: number) => number) => void;
  totalMade: number;
  setTotalMade: (done: (done: number) => number) => void;
};

export const WishListContext = createContext<WishListContextProps | null>(null);

const WishProvider = ({ children }: ProviderProps) => {
  const [order, setOrder] = useState<Food[]>([]);
  const [currentFood, setCurrentFood] = useState<CurrentFoodProps>({
    name: "",
    price: 0,
    id: 0,
  });
  const [toMake, setToMake] = useState<Order[]>([]);
  const [qntToMake, setQntToMake] = useState<number>(0);
  const [totalMade, setTotalMade] = useState<number>(0);

  const values: WishListContextProps = {
    order,
    setOrder,
    currentFood,
    setCurrentFood,
    toMake,
    setToMake,
    qntToMake,
    setQntToMake,
    totalMade,
    setTotalMade,
  };

  return (
    <WishListContext.Provider value={values}>
      {children}
    </WishListContext.Provider>
  );
};
export default WishProvider;
