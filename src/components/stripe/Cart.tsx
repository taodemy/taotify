import { appFetch } from "@/utils/fetchHelper";
import { useRouter } from "next/router";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import Button from "../buttons";

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
  order_number: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Cart = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  // const [order, setOrder] = useState<Order>({} as Order);
  const router = useRouter();
  useEffect(() => {
    // create customer + get subscription price
    const fetchOrders = async () => {
      const orders = (await appFetch({
        method: "GET",
        path: "/orders/all",
      })) as Order[];
      setOrders(orders);
    };
    try {
      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const handleDeletion = async (order: Order) => {
  //   try {
  //     // find order and call delete api
  //     if (order.payment_status === "success") {
  //       throw new Error(
  //         "The selected order has a payment associated with it. Deleting paid orders is not allowed."
  //       );
  //     }
  //     await appFetch({
  //       method: "DELETE",
  //       path: "/orders/delete",
  //       payload: { order_id: order._id },
  //     });
  //     // 使用filter去掉order._id 的那个部分
  //   } catch (error: any) {
  //     console.log("error: ");
  //     console.log(error);
  //   } finally {
  //     const newOrders = orders.filter((item) => item._id !== order._id);
  //     console.log(newOrders);
  //     // setOrders((states) => states.filter((item) => item._id !== order._id));
  //   }
  // };
  const handleDeletion = async (order: Order) => {
    try {
      // find order and call delete api
      if (order.payment_status === "success") {
        throw new Error(
          "The selected order has a payment associated with it. Deleting paid orders is not allowed."
        );
      }
      await appFetch({
        method: "DELETE",
        path: "/orders/delete",
        payload: { order_id: order._id },
      });
      // 使用filter去掉order._id 的那个部分
      setOrders((states) => states.filter((item) => item._id !== order._id));
    } catch (error: any) {
      console.log("error: ");
      console.log(error);
    }
  };
  const handleCheckout = async (order: Order) => {
    //  调用checkout api
    try {
      const response = await appFetch({
        method: "POST",
        path: "/stripe/create-subscription",
        payload: { order },
      });
      // 付款成功后，通过webhook更新我的数据库，因为success url会返回这个页面，页面加载时候，state会根据后端数据rerender。
      // 刚刚webhook没有开启，数据库没有更新
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <table className="bg-light">
      <tbody>
        <tr>
          <th>order number</th>
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
              <td>{order.order_number}</td>
              <td>{order.product}</td>
              <td className="mx-4 border">
                {order.unit_amount / 100}/{order.currency}
              </td>
              <td className="mx-4 border">
                {order.interval_count}
                {order.interval}
              </td>
              <td className="mx-4 border">{order.payment_status}</td>
              <td className="mx-4 cursor-pointer border">
                <Button
                  disabled={order.payment_status === "success"}
                  size="small"
                  label="checkout"
                  onClick={() => {
                    handleCheckout(order);
                  }}
                />
              </td>
              <td className="mx-4 cursor-pointer border">
                <Button
                  disabled={order.payment_status === "success"}
                  size="small"
                  label="delete"
                  onClick={() => {
                    handleDeletion(order);
                  }}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default Cart;
