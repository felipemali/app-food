import { useEffect, useState, useMemo } from "react";
import { db } from "../firebase";

export type OrderItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

export type Order = {
  id: string;
  createdAt: Date;
  items: OrderItem[];
};

export type Filters = {
  date?: Date;
};

export const useOrders = (filters?: Filters) => {
  const [dataOrder, setDataOrder] = useState<Order[]>([]);

  useEffect(() => {
    setDataOrder([]);
    const query = db.collection("orders");

    if (filters?.date) {
      query.where("createdAt", ">=", filters.date);
    }

    query.get().then((data: any) => {
      setDataOrder([...data.docs.map((order: any) => order.data())]);
    });
  }, []);
  console.log(dataOrder);

  return dataOrder;
};
