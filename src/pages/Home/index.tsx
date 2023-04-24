import Header from "../../components/Header";
import OrderTab from "../../components/Orders/OrderTab";


// export const db = getFirestore(firebaseApp);
// export const orderCollectionRef = collection(db, "orders");
const Home = () => {
  // const data = orders.map((e) => e.data.map((r) => r.name));
  // const orders = useFindOrders();
  // const data = orders.map((e) => e.data?.map((o) => o));
  // console.log(data);

  return (
    <>
      <Header />
      <OrderTab />
    </>
  );
};
export default Home;
