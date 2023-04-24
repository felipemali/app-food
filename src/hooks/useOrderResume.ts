import { useMemo } from "react";
import { Filters, useOrders } from "./useOrders";

type Order = {
  id: string;
  items: [];
};

type OrderResume = {
  [id: string]: {
    id: number;
    name: string;
    qnt: number;
    total: number;
  };
};

export const useOrderResume = (filters?: Filters) => {
  const orders = useOrders(filters);

  return useMemo(() => {
    const result = orders.reduce((resume, currentOrder) => {
      currentOrder.items.forEach((item) => {
        if (resume[item.id]) {
          resume[item.id].qnt += item.quantity;
          resume[item.id].total += item.price * item.quantity;
        } else {
          resume[item.id] = {
            id: item.id,
            name: item.name,
            qnt: item.quantity,
            total: item.price * item.quantity,
          };
        }
      });

      return resume;
    }, {} as OrderResume);

    return Object.values(result);
  }, [orders]);
};
