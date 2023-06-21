import Button from "@/components/buttons";
import tokenHandler from "@/utils/tokenHandler";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Price {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  custom_unit_amount?: any;
  livemode: boolean;
  lookup_key?: any;
  metadata: { [key: string]: string };
  nickname?: any;
  product: Product;
  recurring: Recurring;
  tax_behavior: string;
  tiers_mode?: any;
  transform_quantity?: any;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
}

interface Recurring {
  aggregate_usage?: any;
  interval: string;
  interval_count: number;
  trial_period_days?: any;
  usage_type: string;
}

interface Product {
  id: string;
  object: string;
  active: boolean;
  attributes: any[];
  created: number;
  default_price: string;
  description: string;
  images: any[];
  livemode: boolean;
  metadata: { [key: string]: string };
  name: string;
  package_dimensions?: any;
  shippable?: any;
  statement_descriptor?: any;
  tax_code?: any;
  type: string;
  unit_label?: any;
  updated: number;
  url?: any;
}

let token: string;

const Price = () => {
  const [prices, setPrices] = useState<Price[]>([]);

  useEffect(() => {
    const { token } = tokenHandler.getToken() || "no token";
    // create customer + get subscription price
    console.log(`${process.env.TAOTIFY_BACKEND_URL}/stripe/price`);
    const fetchPrices = async () => {
      // const { prices } = await fetch(`${process.env.TAOTIFY_BACKEND_URL}/stripe/price`, {
      const { prices } = await fetch(`${process.env.TAOTIFY_BACKEND_URL}/stripe/price`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((r) => r.json());
      prices && setPrices(prices);
    };
    try {
      fetchPrices();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleClick = async (price: Price) => {
    // create order
    const { id: price_id, product, unit_amount, currency } = price;
    const { token } = tokenHandler.getToken() || "no token";
    console.log(token, "@token");

    await fetch(`${process.env.TAOTIFY_BACKEND_URL}/orders/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ price }),
    }).then((r) => r.json());
  };
  return (
    <>
      <h1 className="mt-16 text-light-300">Select a plan</h1>

      <div className="container flex justify-center">
        {prices?.map((price) => {
          return (
            <div className="ml-4 border border-light-100 text-light" key={price.id}>
              <h3>{price.product.name}</h3>

              <p>
                ${price.unit_amount / 100} /{price.recurring.interval_count}
                {price.recurring.interval}
              </p>

              <Button
                label="add to cart"
                onClick={() => {
                  handleClick(price);
                }}
              >
                add to cart
              </Button>
            </div>
          );
        })}
      </div>
      <Link href="/member/cart" className="border text-light">
        go to cart
      </Link>
    </>
  );
};
export default Price;
