import { getDocs } from "firebase/firestore";
import { useContext } from "react";
import { WishListContext } from "../provider/wishList";
import { useEffect, useState } from "react";
import { orderCollectionRef } from "../firebase";

type DataOrderProps = {
  id: string;
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

export const useFindOrders = () => {
  const [dataOrder, setDataOrder] = useState<OrderProps[]>([]);

  useEffect(() => {
    getDocs(orderCollectionRef).then((data) => {
      const newData = data.docs.map((doc) => doc.data()) as OrderProps[];
      setDataOrder(newData);
    });
  }, []);

  return dataOrder;
};
