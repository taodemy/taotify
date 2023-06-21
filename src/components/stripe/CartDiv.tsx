import { appFetch } from "@/utils/fetchHelper";
import tokenHandler from "@/utils/tokenHandler";
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
    const { token } = tokenHandler.getToken() || "no token";
    // create customer + get subscription price
    console.log(`${process.env.TAOTIFY_BACKEND_URL}/orders/all`);
    const fetchPrices = async () => {
      const { orders } = await fetch(`${process.env.TAOTIFY_BACKEND_URL}/orders/all`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((r) => r.json());
      orders && setOrders(orders);
    };
    try {
      fetchPrices();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleDeletion = () => {};
  return (
    // <table className="bg-light">
    //   <thead>
    //     <tr>
    //       <th>order type</th>
    //       <th>price</th>
    //       <th>subscription length</th>
    //       <th>payment status</th>
    //       <th>pay</th>
    //       <th>delete</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {orders &&
    //       orders.map((order) => (
    //         <tr key={order._id}>
    //           <td>{order.product}</td>
    //           <td className="ml-4 border">
    //             {order.unit_amount / 100}/{order.currency}
    //           </td>
    //           <td className="ml-4 border">
    //             {order.interval_count}
    //             {order.interval}
    //           </td>
    //           <td className="ml-4 border">{order.payment_status}</td>
    //           <td>proceed to checkout</td>
    //           <td onClick={handleDeletion}>delete order</td>
    //         </tr>
    //       ))}
    //   </tbody>
    // </table>
    <div>
      {orders &&
        orders.map((order) => (
          <div key={order._id}>
            <span>{order.product}</span>
            <span className="ml-4 border">
              {order.unit_amount / 100}/{order.currency}
            </span>
            <span className="ml-4 border">
              {order.interval_count}
              {order.interval}
            </span>
            <span className="ml-4 border">{order.payment_status}</span>
            <span>proceed to checkout</span>
            <span onClick={handleDeletion}>delete order</span>
          </div>
        ))}
    </div>
  );
};
export default Cart;
