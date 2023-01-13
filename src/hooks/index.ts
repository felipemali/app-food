import { useContext } from "react";
import { WishListContext } from "../provider/wishList";
//hooks são usados apenas em estados ou componentes

export const useFood = () => {
  const context = useContext(WishListContext);

  if (context) {
    return context;
  }

  throw new Error("Context is not defined.");
};
