import React, { createContext, useState } from "react";
type ProviderProps = {
  children: React.ReactNode;
};

export type Food = {
  name: string;
  price: number;
  quantity: number;
  id: number;
  total_price: number;
};
type CurrentFoodProps = {
  name: string;
  price: number;
  id: number;
};

export type WishListContextProps = {
  name: string;
  order: Food[];
  setOrder: (food: Food[]) => void;
  currentFood: CurrentFoodProps;
  setCurrentFood: (currentFood: CurrentFoodProps) => void;
  toMake: any;
  setToMake: (make: any) => void;
};

export const WishListContext = createContext<WishListContextProps | null>(null);

const WishProvider = ({ children }: ProviderProps) => {
  const name = "felipe";
  const [order, setOrder] = useState<Food[]>([]);
  const [currentFood, setCurrentFood] = useState<CurrentFoodProps>({
    name: "",
    price: 0,
    id: 0,
  });
  const [toMake, setToMake] = useState<Food[]>([]);

  const values: WishListContextProps = {
    name,
    order,
    setOrder,
    currentFood,
    setCurrentFood,
    toMake,
    setToMake,
  };

  return (
    <WishListContext.Provider value={values}>
      {children}
    </WishListContext.Provider>
  );
};
export default WishProvider;
