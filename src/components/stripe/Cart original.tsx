import { appFetch } from "@/utils/fetchHelper";
import { useEffect, useState } from "react";

interface Order {
  _id: string;
  user_id: string;
  payment_status: string;
  product: string;
  price_id: string;
  unit_amount: number;
  currency: string;
  interval: string;
  interval_count: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Cart = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    // create customer + get subscription price
    const fetchOrders = async () => {
      const orders = (await appFetch({
        method: "GET",
        path: "/orders/all",
      })) as Order[];
      setOrders(orders);
      console.log("render");
    };
    try {
      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleDeletion = () => {};
  return (
    <table className="bg-light">
      <tr>
        <th>order type</th>
        <th>price</th>
        <th>subscription length</th>
        <th>payment status</th>
        <th>pay</th>
        <th>delete</th>
      </tr>
      {orders.length > 1 &&
        orders.map((order) => (
          <tr key={order._id}>
            <td>{order.product}</td>
            <td className="ml-4 border">
              {order.unit_amount / 100}/{order.currency}
            </td>
            <td className="ml-4 border">
              {order.interval_count}
              {order.interval}
            </td>
            <td className="ml-4 border">{order.payment_status}</td>
            <td>proceed to checkout</td>
            <td onClick={handleDeletion}>delete order</td>
          </tr>
        ))}
    </table>
  );
};
export default Cart;
