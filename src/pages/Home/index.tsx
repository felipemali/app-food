import Header from "../../components/Header";
import OrderTab from "../../components/OrderTab";
import WishProvider from "../../provider/wishList";

const Home = () => {
  return (
    <WishProvider>
      <Header />
      <OrderTab />
    </WishProvider>
  );
};
export default Home;
